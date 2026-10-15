import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Settings } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useProjects } from '../context/ProjectsContext';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  activeSection: string;
  onNavigate?: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { setIsAdminOpen } = useProjects();
  
  const whatsappUrl = `https://wa.me/5513991472036?text=${encodeURIComponent(t.whatsapp.navMessage)}`;

  const navLinks = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.about, href: '#sobre', id: 'sobre' },
    { name: t.nav.services, href: '#servicos', id: 'servicos' },
    { name: t.nav.cases, href: '#sucesso', id: 'sucesso' },
    { name: t.nav.projects, href: '#projetos', id: 'projetos' },
    { name: t.nav.testimonials, href: '#depoimentos', id: 'depoimentos' },
    { name: t.nav.certifications, href: '#certificacoes', id: 'certificacoes' },
    { name: t.nav.contact, href: '#contato', id: 'contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate ? onNavigate('home') : window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-2xl font-bold tracking-tighter text-blue-900">
              NANDO<span className="text-blue-600">SILVA</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`text-xs xl:text-sm font-bold transition-colors duration-300 hover:text-blue-600 ${
                  activeSection === link.id ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pl-2 border-l border-slate-200 flex items-center space-x-3">
              <LanguageSelector variant="compact" />

              <button
                onClick={() => setIsAdminOpen(true)}
                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors border border-transparent hover:border-blue-100"
                title="Painel Admin - Gerenciar Projetos"
              >
                <Settings size={18} />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 group"
              >
                {t.nav.freeConsultation}
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button & Selector */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSelector variant="compact" />
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
              title="Painel Admin"
            >
              <Settings size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-3 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="px-2 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Idioma:</span>
            <LanguageSelector variant="segmented" />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`block px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                activeSection === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              setIsOpen(false);
              setIsAdminOpen(true);
            }}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
          >
            <span className="flex items-center gap-2">
              <Settings size={18} className="text-blue-600" />
              Painel Admin (Projetos)
            </span>
            <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">Gerenciar</span>
          </button>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-bold"
            >
              {t.nav.talkToMe}
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
