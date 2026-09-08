"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Language, dictionaries, TranslationKey } from "@/i18n/dictionaries";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");

  // Load saved preference on client mount
  useEffect(() => {
    const saved = localStorage.getItem("app_lang") as Language;
    if (saved && ["EN", "NL", "DE", "FR"].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
  };

  const t = (
    key: TranslationKey,
    params?: Record<string, string | number>,
  ): string => {
    const dict = dictionaries[language] || dictionaries["EN"];
    let text: string = dict[key] || dictionaries["EN"][key] || key;

    if (params) {
      Object.entries(params).forEach(([paramKey, val]) => {
        text = text.replace(`{${paramKey}}`, String(val));
      });
    }

    return text;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
