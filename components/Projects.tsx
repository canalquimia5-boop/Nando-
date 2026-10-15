import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MessageCircle, Settings, Plus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useProjects } from '../context/ProjectsContext';
import { ProjectItem } from '../i18n/translations';

type CategoryKey = 'all' | 'health' | 'ecommerce' | 'tech' | 'marketing' | 'architecture' | 'institutional';

const CATEGORY_KEYS: CategoryKey[] = [
  'all',
  'health',
  'ecommerce',
  'tech',
  'marketing',
  'architecture',
  'institutional'
];

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects, setIsAdminOpen } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p: ProjectItem) => p.categoryKey === selectedCategory);

  const whatsappUrl = `https://wa.me/5513991472036?text=${encodeURIComponent(t.whatsapp.projectMessage)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              {t.projects.badge}
            </h2>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-xs font-bold border border-blue-200/60"
              title="Abrir painel administrativo para criar e remover projetos"
            >
              <Settings size={13} />
              Gerenciar Projetos
            </button>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.projects.heading} <span className="text-blue-600">{t.projects.headingHighlight}</span>
          </h3>
          <p className="text-slate-500 text-lg">
            {t.projects.descriptionPrefix}{projects.length}{t.projects.descriptionSuffix}
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {CATEGORY_KEYS.map((catKey) => {
            const label = t.projects.categories[catKey];
            const isActive = selectedCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: ProjectItem) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-full text-slate-900 shadow-xl hover:scale-110 transition-transform"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-slate-900 shadow-sm uppercase tracking-wider">
                    {t.projects.categories[project.categoryKey] || project.originalCategory}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 leading-relaxed line-clamp-2 mb-6 text-sm">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                   <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    {t.projects.visitWebsite}
                    <ExternalLink size={14} className="ml-2 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 text-lg group"
        >
          <MessageCircle className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
          {t.projects.ctaButton}
        </a>

        <button
          onClick={() => setIsAdminOpen(true)}
          className="inline-flex items-center px-6 py-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-all text-base border border-slate-200"
        >
          <Plus size={20} className="mr-2 text-blue-600" />
          Adicionar / Gerenciar Projetos
        </button>
      </div>
    </div>
  );
};

export default Projects;
