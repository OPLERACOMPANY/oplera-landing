'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Temporarily locked to English only - will enable Arabic later
  const [language, setLanguageState] = useState<Language>('en')
  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    // Temporarily disabled - English only for now
    // Load saved language from localStorage
    // const savedLang = localStorage.getItem('language') as Language
    // if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
    //   setLanguageState(savedLang)
    // }
  }, [])

  useEffect(() => {
    // Load translations for current language (English only for now)
    import(`@/translations/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => setTranslations({}))
    
    // Temporarily disabled - no localStorage saving for now
    // localStorage.setItem('language', language)
    
    // Set document direction (always LTR for English)
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
  }, [language])

  const setLanguage = (lang: Language) => {
    // Temporarily disabled - locked to English only
    // setLanguageState(lang)
    console.log('Language switching temporarily disabled. Currently showing English only.')
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

