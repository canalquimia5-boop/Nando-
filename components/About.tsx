import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/10ucyBHVk_vunOfkuud9RApjVSOnIfZ62" 
              alt="Fernando Carneiro - Trajetória Profissional" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
          
          {/* Floating Experience Badge */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 p-6 bg-white rounded-2xl shadow-xl border border-slate-100 hidden lg:block"
          >
            <p className="text-4xl font-bold text-blue-600 mb-1">{t.about.experienceYears}</p>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-wider">
              {t.about.experienceLabelLine1} <br />{t.about.experienceLabelLine2}
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
              {t.about.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {t.about.heading} <span className="text-blue-600">{t.about.headingHighlight}</span>
            </h2>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            {t.about.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.about.features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="p-1 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
