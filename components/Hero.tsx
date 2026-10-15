import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Search, BarChart3, TrendingUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const statsList = [
    { icon: Search, label: t.hero.stats.seo.label, value: t.hero.stats.seo.value },
    { icon: BarChart3, label: t.hero.stats.roi.label, value: t.hero.stats.roi.value },
    { icon: TrendingUp, label: t.hero.stats.growth.label, value: t.hero.stats.growth.value }
  ];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
          alt="Marketing Digital Background"
          className="w-full h-[120%] object-cover opacity-40 grayscale"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ paddingLeft: '32px', paddingTop: '150px', paddingBottom: '30px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 mt-10" style={{ paddingTop: '170px' }}>
            {t.hero.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            {t.hero.badge}
          </span>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#servicos" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 text-lg"
            >
              {t.hero.btnSolutions}
            </a>
            <a 
              href="#sucesso" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 text-lg"
            >
              {t.hero.btnCases}
            </a>
          </div>

          <motion.div 
            style={{ opacity }}
            className="mt-12 flex flex-col items-center"
          >
            <p className="text-slate-500 text-xs font-medium mb-2 uppercase tracking-widest">{t.hero.scrollText}</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="text-blue-500 w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Dynamic Badges */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex items-center space-x-4"
            >
              <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                <stat.icon size={24} />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                <p className="text-white text-xl font-bold">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
