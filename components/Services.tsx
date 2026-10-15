import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, MousePointer2, Megaphone, Share2, Code, Video, Palette, Smartphone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ServiceItem } from '../i18n/translations';

export const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  seo: Search,
  marketing: Megaphone,
  sites: Code,
  trafego: MousePointer2,
  global: Globe,
  social: Share2,
  video: Video,
  design: Palette,
  appdev: Smartphone
};

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-20">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
          {t.services.badge}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {t.services.heading} <span className="text-blue-600">{t.services.headingHighlight}</span>
        </h3>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg">
          {t.services.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.items.map((service: ServiceItem, idx: number) => {
          const Icon = serviceIcons[service.id] || Search;
          return (
            <motion.div
              key={service.id || idx}
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden text-left"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-0 group-hover:opacity-5 -mr-16 -mt-16 rounded-full transition-opacity`} />
              
              <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${service.color} text-white mb-8 shadow-lg shadow-blue-500/20`}>
                <Icon size={28} />
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <button 
                onClick={() => onSelectService?.(service.id)}
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group/btn cursor-pointer"
              >
                {t.services.learnMore}
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
