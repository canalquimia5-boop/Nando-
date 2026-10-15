import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { CaseItem } from '../i18n/translations';

interface SuccessStoriesProps {
  onSelectCase?: (caseId: string) => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ onSelectCase }) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
          {t.cases.badge}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {t.cases.heading} <span className="text-blue-600">{t.cases.headingHighlight}</span>
        </h3>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg">
          {t.cases.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {t.cases.items.map((item: CaseItem, idx: number) => (
          <motion.div
            key={item.id || idx}
            whileHover={{ y: -10 }}
            className="relative group bg-white rounded-[2.5rem] p-1 border border-slate-100 shadow-xl overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color}`} />
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <span className={`px-4 py-1.5 rounded-full text-white text-xs font-black uppercase tracking-wider bg-gradient-to-r ${item.color}`}>
                  {item.metric}
                </span>
              </div>

              <p className="text-blue-600 font-bold text-sm mb-2">{item.client}</p>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl mb-8 flex items-center space-x-3 border border-slate-100">
                <Zap className="text-amber-500 flex-shrink-0" size={20} />
                <span className="text-slate-900 font-bold text-sm">{item.impact}</span>
              </div>

              <button 
                onClick={() => onSelectCase?.(item.id)}
                className="flex items-center text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors group/btn cursor-pointer"
              >
                {t.cases.viewDetails}
                <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Bar */}
      <div className="mt-20 py-10 border-t border-slate-100 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center space-x-2">
          <Target size={24} />
          <span className="font-black text-xl tracking-tighter">TECHLEAD</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users size={24} />
          <span className="font-black text-xl tracking-tighter">GLOBALNET</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap size={24} />
          <span className="font-black text-xl tracking-tighter">FASTSALES</span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp size={24} />
          <span className="font-black text-xl tracking-tighter">ROI.FLOW</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
