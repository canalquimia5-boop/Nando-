import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, LANGUAGES } from './types';
import { translations, TranslationSchema } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  availableLanguages: typeof LANGUAGES;
}

const STORAGE_KEY = 'nando_silva_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === 'pt' || saved === 'en' || saved === 'es')) {
        return saved;
      }
      // Check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) return 'es';
      if (browserLang.startsWith('en')) return 'en';
      return 'pt';
    } catch {
      return 'pt';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('Failed to save language in localStorage', e);
    }
  };

  useEffect(() => {
    const htmlLang = language === 'pt' ? 'pt-BR' : language;
    document.documentElement.lang = htmlLang;
  }, [language]);

  const t = useMemo(() => {
    return translations[language] || translations.pt;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
