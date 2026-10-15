import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  ArrowLeft, 
  Search, 
  FolderGit2, 
  Layers, 
  RotateCcw, 
  Download, 
  Upload, 
  Check, 
  AlertTriangle,
  Globe,
  Image as ImageIcon,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  KeyRound,
  LogOut,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';
import { useAdminAuth } from '../context/AdminAuthContext';
import { ProjectItem } from '../i18n/translations';
import AdminLogin from './AdminLogin';

interface AdminDashboardProps {
  onClose: () => void;
}

const PRESET_IMAGES = [
  { label: 'Hotel & Pousada', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
  { label: 'Resort / Praia', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800' },
  { label: 'Tecnologia / SaaS', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
  { label: 'Saúde & Medicina', url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800' },
  { label: 'E-commerce', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800' },
  { label: 'Arquitetura', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { label: 'Marketing & Negócios', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { label: 'Corporativo', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' }
];

const CATEGORY_OPTIONS: Array<{ key: ProjectItem['categoryKey']; label: string }> = [
  { key: 'institutional', label: 'Institucional / Corporativo / Turismo' },
  { key: 'health', label: 'Saúde / Medicina / Odontologia' },
  { key: 'ecommerce', label: 'E-commerce / Loja Virtual' },
  { key: 'tech', label: 'Tecnologia / SaaS / Software' },
  { key: 'marketing', label: 'Marketing / Agência / Mídia' },
  { key: 'architecture', label: 'Arquitetura / Engenharia / Decoração' }
];

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const { 
    projects, 
    addProject, 
    updateProject, 
    removeProject, 
    resetToDefaults,
    exportProjectsJSON,
    importProjectsJSON,
    cloudStatus,
    isCloudSynced
  } = useProjects();

  const { 
    isAuthenticated, 
    isDefaultPassword, 
    logout, 
    changePassword 
  } = useAdminAuth();

  // Password change modal state
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPwdInput, setCurrentPwdInput] = useState('');
  const [newPwdInput, setNewPwdInput] = useState('');
  const [confirmPwdInput, setConfirmPwdInput] = useState('');
  const [showCurrentPwd, setShowCurrentPwd] = useState(false);
  const [showNewPwd, setShowNewPwd] = useState(false);
  const [pwdError, setPwdError] = useState<string | null>(null);
  const [isChangingPwd, setIsChangingPwd] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  
  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [projectToDelete, setProjectToDelete] = useState<ProjectItem | null>(null);
  const [isBackupOpen, setIsBackupOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [categoryKey, setCategoryKey] = useState<ProjectItem['categoryKey']>('institutional');
  const [originalCategory, setOriginalCategory] = useState('Turismo');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  // Notification helper
  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setStatusMessage({ type, text });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  // Open modal for Create
  const handleOpenCreate = () => {
    setEditingProject(null);
    setTitle('');
    setUrl('');
    setCategoryKey('institutional');
    setOriginalCategory('Turismo');
    setImage(PRESET_IMAGES[0].url);
    setDescription('');
    setIsFormOpen(true);
  };

  // Open modal for Edit
  const handleOpenEdit = (project: ProjectItem) => {
    setEditingProject(project);
    setTitle(project.title);
    setUrl(project.url);
    setCategoryKey(project.categoryKey);
    setOriginalCategory(project.originalCategory || 'Institucional');
    setImage(project.image);
    setDescription(project.description);
    setIsFormOpen(true);
  };

  // Handle Save (Create or Edit)
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !url.trim()) {
      showToast('Por favor, preencha o título e a URL do projeto.', 'error');
      return;
    }

    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }

    const finalImage = image.trim() || PRESET_IMAGES[0].url;

    if (editingProject) {
      updateProject(editingProject.id, {
        title: title.trim(),
        url: formattedUrl,
        categoryKey,
        originalCategory: originalCategory.trim() || 'Institucional',
        image: finalImage,
        description: description.trim()
      });
      showToast(`Projeto "${title}" atualizado com sucesso!`);
    } else {
      addProject({
        title: title.trim(),
        url: formattedUrl,
        categoryKey,
        originalCategory: originalCategory.trim() || 'Institucional',
        image: finalImage,
        description: description.trim()
      });
      showToast(`Novo projeto "${title}" publicado com sucesso no topo do portfólio!`);
    }

    setIsFormOpen(false);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    if (projectToDelete) {
      removeProject(projectToDelete.id);
      showToast(`Projeto "${projectToDelete.title}" removido com sucesso.`);
      setProjectToDelete(null);
    }
  };

  // Filtered projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.originalCategory && project.originalCategory.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = filterCategory === 'all' || project.categoryKey === filterCategory;

    return matchesSearch && matchesCategory;
  });

  // Password Change Handler
  const handleChangePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdError(null);

    if (newPwdInput.length < 6) {
      setPwdError('A nova senha deve possuir pelo menos 6 caracteres.');
      return;
    }
    if (newPwdInput !== confirmPwdInput) {
      setPwdError('A confirmação não confere com a nova senha digitada.');
      return;
    }

    setIsChangingPwd(true);
    try {
      const res = await changePassword(currentPwdInput, newPwdInput);
      if (res.success) {
        showToast('Senha de acesso alterada com sucesso!');
        setIsPasswordModalOpen(false);
        setCurrentPwdInput('');
        setNewPwdInput('');
        setConfirmPwdInput('');
      } else {
        setPwdError(res.error || 'Erro ao atualizar a senha.');
      }
    } catch (err) {
      setPwdError('Erro inesperado ao salvar a senha.');
    } finally {
      setIsChangingPwd(false);
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  // If not authenticated, prompt login modal
  if (!isAuthenticated) {
    return <AdminLogin onClose={onClose} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors border border-slate-700"
            >
              <ArrowLeft size={18} className="mr-2" />
              Voltar ao Site
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <FolderGit2 size={20} />
              </div>
              <div>
                <h1 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                  Painel Admin <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-bold uppercase tracking-wider">Portfólio</span>
                </h1>
                <p className="text-xs text-slate-400">Gerencie todos os projetos visíveis aos seus clientes</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end flex-wrap">
            {/* Cloud Firestore Status Badge */}
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs" title="Status da sincronização na nuvem com Firebase Firestore">
              <span className={`w-2 h-2 rounded-full ${cloudStatus === 'synced' ? 'bg-cyan-400 animate-pulse' : cloudStatus === 'connecting' ? 'bg-amber-400 animate-ping' : 'bg-slate-500'}`} />
              <span className="text-slate-300 font-medium text-[11px]">
                {cloudStatus === 'synced' ? 'Firestore Conectado' : cloudStatus === 'connecting' ? 'Conectando Firestore...' : 'Offline (Cache Local)'}
              </span>
            </div>

            {/* Authenticated Admin Pill */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold">Sessão Autenticada</span>
            </div>

            {/* Change Password Button */}
            <button
              onClick={() => {
                setIsPasswordModalOpen(true);
                setPwdError(null);
              }}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-slate-700 flex items-center gap-1.5"
              title="Alterar senha de acesso"
            >
              <KeyRound size={14} className="text-amber-400" />
              <span className="hidden md:inline">Alterar Senha</span>
            </button>

            {/* Backup Button */}
            <button
              onClick={() => setIsBackupOpen(true)}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors border border-slate-700 flex items-center gap-1.5"
              title="Backup e Importação JSON"
            >
              <Download size={14} />
              <span className="hidden md:inline">Backup / JSON</span>
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/50 text-red-300 hover:text-red-200 text-xs font-semibold transition-colors border border-red-800/50 flex items-center gap-1.5"
              title="Encerrar sessão administrativa"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Sair</span>
            </button>

            {/* New Project Button */}
            <button
              onClick={handleOpenCreate}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-lg shadow-blue-500/25 group ml-1"
            >
              <Plus size={16} className="mr-1 group-hover:rotate-90 transition-transform" />
              Novo Projeto
            </button>
          </div>
        </div>
      </header>

      {/* Security Advisory Banner if Default Password is in use */}
      {isDefaultPassword && (
        <div className="bg-amber-950/70 border-b border-amber-500/30 px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-amber-200">
            <div className="flex items-center gap-2">
              <ShieldAlert size={16} className="text-amber-400 shrink-0" />
              <span>
                <strong>Atenção à Segurança:</strong> Você ainda está usando a senha inicial padrão (<code className="px-1.5 py-0.5 rounded bg-amber-900/60 font-mono font-bold text-amber-300">admin123</code>). Crie uma senha pessoal para maior segurança.
              </span>
            </div>
            <button
              onClick={() => {
                setIsPasswordModalOpen(true);
                setPwdError(null);
              }}
              className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow"
            >
              Trocar Senha Agora
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Toast Alert */}
        <AnimatePresence>
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-4 rounded-2xl flex items-center justify-between border shadow-xl ${
                statusMessage.type === 'success' 
                  ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-200' 
                  : 'bg-red-950/80 border-red-500/50 text-red-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle2 size={20} className={statusMessage.type === 'success' ? 'text-emerald-400' : 'text-red-400'} />
                <span className="text-sm font-semibold">{statusMessage.text}</span>
              </div>
              <button 
                onClick={() => setStatusMessage(null)}
                className="text-xs font-bold uppercase tracking-wider underline hover:opacity-80"
              >
                Fechar
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 backdrop-blur-sm">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total de Projetos</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-3xl font-black text-white">{projects.length}</span>
              <span className="text-xs text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">Ativos no site</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 backdrop-blur-sm">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Categorias</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-3xl font-black text-white">6</span>
              <span className="text-xs text-slate-400">Filtros dinâmicos</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 backdrop-blur-sm">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Armazenamento</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-base font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Local Sincronizado
              </span>
              <span className="text-xs text-slate-500">Persistente</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-800 backdrop-blur-sm flex flex-col justify-between">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Restauração</span>
            <button
              onClick={() => {
                if (window.confirm('Deseja realmente restaurar a lista original de projetos? Quaisquer projetos customizados não salvos serão redefinidos.')) {
                  resetToDefaults();
                  showToast('Projetos restaurados para os padrões originais com sucesso.');
                }
              }}
              className="mt-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw size={14} />
              Restaurar Padrões Originais
            </button>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Buscar por nome, URL ou descrição..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filterCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              Todos ({projects.length})
            </button>
            {CATEGORY_OPTIONS.map((cat) => {
              const count = projects.filter(p => p.categoryKey === cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => setFilterCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                    filterCategory === cat.key 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label.split('/')[0].trim()} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects List Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers size={18} className="text-blue-400" />
              Projetos Cadastrados ({filteredProjects.length})
            </h2>
            <span className="text-xs text-slate-400">
              Clique em "+ Novo Projeto" para adicionar um site ao portfólio
            </span>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-slate-800/40 border border-slate-800">
              <FolderGit2 size={48} className="mx-auto text-slate-600 mb-3" />
              <p className="text-lg font-bold text-slate-300">Nenhum projeto encontrado</p>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                Não há projetos correspondentes aos filtros selecionados. Tente ajustar a busca ou adicionar um novo projeto.
              </p>
              <button
                onClick={handleOpenCreate}
                className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all"
              >
                + Adicionar Primeiro Projeto
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-slate-800/60 border border-slate-800 hover:border-slate-700 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = PRESET_IMAGES[0].url;
                      }}
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900/90 backdrop-blur-md text-blue-400 border border-slate-700 shadow-lg">
                        {project.originalCategory || project.categoryKey}
                      </span>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-colors backdrop-blur-md border border-slate-700"
                      title="Abrir site em nova aba"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[10px] text-slate-500 font-mono">#{project.id}</span>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 truncate max-w-[160px] flex items-center gap-1"
                        title={project.url}
                      >
                        <Globe size={12} className="flex-shrink-0" />
                        <span className="truncate">{project.url.replace(/^https?:\/\//, '')}</span>
                      </a>

                      <div className="flex items-center space-x-1.5">
                        <button
                          onClick={() => handleOpenEdit(project)}
                          className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                          title="Editar projeto"
                        >
                          <Edit3 size={15} />
                        </button>
                        <button
                          onClick={() => setProjectToDelete(project)}
                          className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-colors"
                          title="Excluir projeto"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Modal: Create / Edit Project */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    {editingProject ? <Edit3 size={20} /> : <Plus size={20} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {editingProject ? 'Editar Projeto' : 'Novo Projeto no Portfólio'}
                    </h3>
                    <p className="text-xs text-slate-400">Preencha os dados abaixo para publicar no portfólio</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-slate-400 hover:text-white text-sm font-bold p-2"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveProject} className="space-y-5">
                {/* Title */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Nome do Projeto / Cliente *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Pousada Ykape, Loja Virtual..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* URL */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    URL do Site (Link do Projeto) *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Ex: https://pousadaykape.site/"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    {url && (
                      <a
                        href={url.startsWith('http') ? url : `https://${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 text-xs font-semibold flex items-center gap-1 border border-slate-700"
                        title="Testar link"
                      >
                        <ExternalLink size={14} />
                        Testar
                      </a>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Filtro de Categoria
                    </label>
                    <select
                      value={categoryKey}
                      onChange={(e) => setCategoryKey(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {CATEGORY_OPTIONS.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Nome da Categoria (Badge no card)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Turismo, Hotelaria, B2B..."
                      value={originalCategory}
                      onChange={(e) => setOriginalCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Image URL & Presets */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    URL da Imagem de Capa
                  </label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors mb-2"
                  />

                  {/* Preset quick buttons */}
                  <span className="text-[11px] text-slate-400 block mb-1.5">Sugestões de fotos em alta qualidade:</span>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {PRESET_IMAGES.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setImage(preset.url)}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border transition-colors ${
                          image === preset.url
                            ? 'bg-blue-600 border-blue-500 text-white font-bold'
                            : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  {/* Preview */}
                  {image && (
                    <div className="mt-2 rounded-xl overflow-hidden aspect-[16/9] border border-slate-700 relative bg-slate-950">
                      <img
                        src={image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = PRESET_IMAGES[0].url;
                        }}
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] bg-slate-900/80 px-2 py-0.5 rounded text-slate-300">
                        Pré-visualização do card
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Descrição do Projeto
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Descreva o objetivo do projeto, métricas ou destaque visual..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-1.5"
                  >
                    <Check size={16} />
                    {editingProject ? 'Salvar Alterações' : 'Publicar no Portfólio'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Confirm Delete */}
      <AnimatePresence>
        {projectToDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl"
            >
              <div className="flex items-center space-x-3 text-rose-400 mb-4">
                <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Remover Projeto?</h3>
                  <p className="text-xs text-slate-400">Esta ação excluirá o projeto do portfólio</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                Tem certeza de que deseja remover <strong className="text-white">"{projectToDelete.title}"</strong> ({projectToDelete.url})? Ele não será mais exibido aos visitantes do site.
              </p>

              <div className="flex items-center justify-end space-x-3">
                <button
                  onClick={() => setProjectToDelete(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold transition-colors shadow-lg shadow-rose-600/30 flex items-center gap-1.5"
                >
                  <Trash2 size={16} />
                  Sim, Excluir
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Backup & JSON Export/Import */}
      <AnimatePresence>
        {isBackupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Backup e Importação JSON</h3>
                  <p className="text-xs text-slate-400">Copie o backup atual ou cole um JSON para atualizar todos os projetos</p>
                </div>
                <button
                  onClick={() => setIsBackupOpen(false)}
                  className="text-slate-400 hover:text-white text-sm font-bold p-2"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Projetos em Formato JSON ({projects.length} itens)
                    </label>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(exportProjectsJSON());
                        showToast('JSON copiado para a área de transferência!');
                      }}
                      className="text-xs font-semibold text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <Download size={12} />
                      Copiar JSON
                    </button>
                  </div>
                  <textarea
                    rows={8}
                    value={importJsonText || exportProjectsJSON()}
                    onChange={(e) => setImportJsonText(e.target.value)}
                    placeholder="Cole aqui o JSON de projetos para importar..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
                  <span className="text-[11px] text-slate-400">
                    O formato deve ser um array com título, url, categoria e imagem.
                  </span>
                  <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => setIsBackupOpen(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                    >
                      Fechar
                    </button>
                    {importJsonText && (
                      <button
                        onClick={async () => {
                          const res = await importProjectsJSON(importJsonText);
                          if (res.success) {
                            showToast(res.message);
                            setIsBackupOpen(false);
                            setImportJsonText('');
                          } else {
                            showToast(res.message, 'error');
                          }
                        }}
                        className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5"
                      >
                        <Upload size={14} />
                        Importar JSON
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Modal: Change Password */}
      <AnimatePresence>
        {isPasswordModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                    <KeyRound size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Alterar Senha do Admin</h3>
                    <p className="text-xs text-slate-400">Proteja o painel com uma senha exclusiva</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="text-slate-400 hover:text-white text-sm font-bold p-2"
                >
                  ✕
                </button>
              </div>

              {pwdError && (
                <div className="p-3.5 mb-4 rounded-xl bg-red-950/70 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-400 shrink-0" />
                  <span>{pwdError}</span>
                </div>
              )}

              <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Senha Atual
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPwd ? 'text' : 'password'}
                      value={currentPwdInput}
                      onChange={e => setCurrentPwdInput(e.target.value)}
                      placeholder="Digite a senha atual..."
                      required
                      className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPwd(!showCurrentPwd)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                    >
                      {showCurrentPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Nova Senha (mínimo 6 caracteres)
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPwd ? 'text' : 'password'}
                      value={newPwdInput}
                      onChange={e => setNewPwdInput(e.target.value)}
                      placeholder="Digite sua nova senha..."
                      required
                      minLength={6}
                      className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPwd(!showNewPwd)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                    >
                      {showNewPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Confirmar Nova Senha
                  </label>
                  <input
                    type="password"
                    value={confirmPwdInput}
                    onChange={e => setConfirmPwdInput(e.target.value)}
                    placeholder="Repita a nova senha..."
                    required
                    minLength={6}
                    className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsPasswordModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isChangingPwd || !currentPwdInput || !newPwdInput || !confirmPwdInput}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 disabled:opacity-50"
                  >
                    {isChangingPwd ? 'Salvando...' : 'Atualizar Senha'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
