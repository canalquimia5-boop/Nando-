import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/5513991472036?text=${encodeURIComponent(t.whatsapp.diagnosticMessage)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
          {t.certifications.badge}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
          {t.certifications.heading} <span className="text-blue-600">{t.certifications.headingHighlight}</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {t.certifications.items.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-200 hover:shadow-xl transition-all"
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={cert.icon} alt={cert.issuer} className="max-w-full max-h-full" />
            </div>
            
            <h4 className="text-xl font-bold text-slate-900 mb-2">{cert.name}</h4>
            <p className="text-slate-500 mb-6 font-medium">{cert.issuer}</p>
            
            <div className="mt-auto pt-6 border-t border-slate-100 w-full flex justify-between items-center text-xs text-slate-400 font-semibold uppercase tracking-widest">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1.5" />
                {cert.date}
              </span>
              <span className="flex items-center text-blue-600 hover:underline cursor-pointer">
                {t.certifications.viewCert}
                <ExternalLink size={14} className="ml-1.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-8 md:p-12 bg-blue-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-blue-500/40">
        <div className="relative z-10 max-w-xl">
          <h4 className="text-3xl font-bold mb-4">{t.certifications.ctaTitle}</h4>
          <p className="text-blue-100 text-lg opacity-90">
            {t.certifications.ctaDesc}
          </p>
        </div>
        <div className="relative z-10">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 text-lg flex items-center"
          >
            {t.certifications.ctaButton}
            <ShieldCheck className="ml-3" size={24} />
          </a>
        </div>
        
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-16 -mb-16 blur-2xl" />
      </div>
    </div>
  );
};

export default Certifications;
