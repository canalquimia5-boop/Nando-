import React from 'react';
import { Lock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useProjects } from '../context/ProjectsContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { setIsAdminOpen } = useProjects();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-white">
              NANDO<span className="text-blue-500">SILVA</span>
            </span>
          </div>

          <div className="text-slate-500 text-sm font-medium">
            © {currentYear} NANDO SILVA. {t.footer.rights}
          </div>

          <div className="flex items-center space-x-6 text-slate-400 text-sm font-semibold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              title="Acessar Painel de Controle de Projetos"
            >
              <Lock size={13} />
              Admin
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            {t.footer.tagline}
          </p>
          <button
            onClick={() => setIsAdminOpen(true)}
            className="text-[11px] text-slate-600 hover:text-blue-400 transition-colors"
          >
            Gerenciador de Portfólio (Admin)
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
