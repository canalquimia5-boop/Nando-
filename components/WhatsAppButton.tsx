import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  const phoneNumber = '5513991472036';
  const message = encodeURIComponent(t.whatsapp.contactMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp.tooltip}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/40 group overflow-hidden"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        
        <MessageCircle size={32} strokeWidth={2.5} className="relative z-10" />
        
        {/* Tooltip on hover */}
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute left-20 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 whitespace-nowrap pointer-events-none"
        >
          {t.whatsapp.tooltip}
        </motion.span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
