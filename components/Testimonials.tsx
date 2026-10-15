import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { testimonialsByLanguage, TestimonialItem } from '../data/testimonialsData';

const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  const data = testimonialsByLanguage[language] || testimonialsByLanguage.pt;
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const filterKeys: Array<keyof typeof data.filterLabels> = [
    'all',
    'dev',
    'seo',
    'video',
    'ecommerce',
    'hospitality'
  ];

  const filteredItems = selectedCategory === 'all'
    ? data.testimonials
    : data.testimonials.filter(item => item.serviceCategory === selectedCategory);

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const whatsappMessage = encodeURIComponent(
    t.whatsapp?.contactMessage || 'Olá Fernando! Vi os depoimentos no seu portfólio e gostaria de agendar uma conversa sobre meu negócio.'
  );
  const whatsappUrl = `https://wa.me/5513991472036?text=${whatsappMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
            {data.badge}
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-5">
          {data.heading} <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{data.headingHighlight}</span>
        </h2>
        
        <p className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Trust & Performance Stats Bar */}
      <div className="mb-12 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex items-center space-x-4 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-500 shadow-sm">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {data.trustStats.rating}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {data.trustStats.ratingSub}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4 sm:pt-0 sm:pl-6 lg:pl-8">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-600 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {data.trustStats.retention}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {data.trustStats.retentionSub}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4 sm:pt-0 sm:pl-6 lg:pl-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {data.trustStats.growth}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {data.trustStats.growthSub}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4 sm:pt-0 sm:pl-6 lg:pl-8">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center flex-shrink-0 text-indigo-600 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {data.trustStats.onTime}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {data.trustStats.onTimeSub}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10">
        {filterKeys.map((key) => {
          const isActive = selectedCategory === key;
          const count = key === 'all' 
            ? data.testimonials.length 
            : data.testimonials.filter(t => t.serviceCategory === key).length;

          return (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600 ring-offset-2' 
                  : 'bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{data.filterLabels[key]}</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Testimonials 9-Card Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
      >
        <AnimatePresence>
          {filteredItems.map((item: TestimonialItem, idx: number) => {
            const isExpanded = !!expandedCards[item.id];
            const isLongQuote = item.quote.length > 170;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -6 }}
                className={`flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 relative group overflow-hidden ${
                  item.featured 
                    ? 'border-blue-200/90 shadow-lg shadow-blue-500/5 ring-1 ring-blue-100' 
                    : 'border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300'
                }`}
              >
                {/* Subtle gradient corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 via-indigo-500/5 to-transparent rounded-bl-[100px] pointer-events-none" />

                <div>
                  {/* Top Bar: Stars, Tag, Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_1px_2px_rgba(251,191,36,0.3)]" />
                      ))}
                    </div>

                    <div className="flex items-center space-x-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/80">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-bold tracking-tight">
                        {data.verifiedBadge}
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="mb-4 inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 text-white shadow-sm">
                    <span className="text-amber-400 font-black text-sm tracking-tight flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-1" />
                      {item.metric}
                    </span>
                    <span className="text-slate-300 text-xs font-medium">
                      {item.metricLabel}
                    </span>
                  </div>

                  {/* Quote with icon */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-blue-100 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                    <p className={`relative z-10 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal ${
                      !isExpanded && isLongQuote ? 'line-clamp-4' : ''
                    }`}>
                      "{item.quote}"
                    </p>

                    {isLongQuote && (
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-block"
                      >
                        {isExpanded ? data.readLess : data.readMore}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Footer: Client Info */}
                <div className="pt-5 border-t border-slate-100 mt-auto">
                  <div className="flex items-center space-x-3.5">
                    <div className="relative">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100 group-hover:ring-blue-400 transition-all shadow-sm"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=2563eb&color=fff&size=200&bold=true`;
                        }}
                      />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 truncate font-medium">
                        {item.role}
                      </p>
                      <p className="text-[11px] text-blue-600/90 font-semibold truncate">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                      {item.projectTag}
                    </span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Bottom Conversion Card */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 text-white overflow-hidden shadow-2xl border border-slate-800">
        {/* Glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-4 border border-blue-400/20">
              <Award className="w-3.5 h-3.5" />
              <span>Garantia de Qualidade & Atendimento Personalizado</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              {data.ctaTitle}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {data.ctaDescription}
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{data.ctaButton}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all border border-slate-700/80 hover:text-white"
            >
              Enviar Mensagem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
