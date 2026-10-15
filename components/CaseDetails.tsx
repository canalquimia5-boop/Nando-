import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap, Target, BarChart3, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { CaseItem } from '../i18n/translations';

interface CaseDetailProps {
  caseData: CaseItem;
  onBack: () => void;
}

const CaseDetails: React.FC<CaseDetailProps> = ({ caseData, onBack }) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ensure case data updates when language switches
  const currentCase = t.cases.items.find(c => c.id === caseData.id) || caseData;

  const whatsappMsg = t.whatsapp.caseMessagePrefix.replace('{client}', currentCase.client);
  const whatsappUrl = `https://wa.me/5513991472036?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-white pb-20"
    >
      {/* Hero Section */}
      <div className={`relative pt-32 pb-20 bg-gradient-to-br ${currentCase.color} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white mb-12 transition-colors font-bold group cursor-pointer"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            {t.cases.details.backBtn}
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-6">
                {t.cases.details.badgePrefix}: {currentCase.client}
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                {currentCase.title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-10">
                {currentCase.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                  <p className="text-sm font-bold uppercase tracking-wider text-white/70 mb-1">
                    {t.cases.details.primaryMetric}
                  </p>
                  <p className="text-4xl font-black">{currentCase.metric}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                  <p className="text-sm font-bold uppercase tracking-wider text-white/70 mb-1">
                    {t.cases.details.finalImpact}
                  </p>
                  <p className="text-4xl font-black">{currentCase.impact.split(' ')[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {/* Challenge */}
          <section>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-red-100 rounded-2xl text-red-600">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{currentCase.challengeTitle}</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {currentCase.challengeText}
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {currentCase.challengePoints.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium p-4 bg-slate-50 rounded-2xl">
                  <CheckCircle2 size={18} className="text-red-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Solution */}
          <section>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                <Zap size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{currentCase.strategyTitle}</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {currentCase.strategyText}
            </p>
            <div className="space-y-6">
              {currentCase.strategySteps.map((step, idx) => (
                <div key={idx} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results Summary */}
          <section className="bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20" />
            
            <div className="relative z-10 text-center mb-12">
              <div className="inline-flex p-4 bg-blue-600 rounded-3xl mb-6">
                <BarChart3 size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">{currentCase.resultsTitle}</h2>
              <p className="text-slate-400">{currentCase.resultsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                <p className="text-5xl font-black text-blue-400 mb-2">{currentCase.metric}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">{currentCase.metricLabel}</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-blue-400 mb-2">{currentCase.impact.split(' ')[0]}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">{currentCase.impactLabel}</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-blue-400 mb-2">{t.cases.details.zeroText}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">{currentCase.zeroLossLabel}</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{currentCase.ctaTitle}</h3>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 text-lg group"
            >
              <MessageCircle className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
              {currentCase.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseDetails;
