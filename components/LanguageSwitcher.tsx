'use client'

/**
 * ⚠️ TEMPORARILY DISABLED
 * 
 * Language switcher component for EN/AR bilingual support.
 * Currently hidden from UI - will be re-enabled in future updates.
 * 
 * To re-enable:
 * 1. Uncomment import in Header.tsx
 * 2. Uncomment <LanguageSwitcher /> components
 * 3. Re-enable setLanguage functionality in LanguageContext.tsx
 */

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 p-1 bg-oplera-navy/50 rounded-lg border border-oplera-cyan/30">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all relative ${
          language === 'en'
            ? 'text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-oplera-cyan/20 border border-oplera-cyan rounded-md"
            transition={{ type: 'spring', duration: 0.5 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <span className="text-lg">🇺🇸</span>
          EN
        </span>
      </button>

      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all relative ${
          language === 'ar'
            ? 'text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        {language === 'ar' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-oplera-cyan/20 border border-oplera-cyan rounded-md"
            transition={{ type: 'spring', duration: 0.5 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <span className="text-lg">🇸🇦</span>
          AR
        </span>
      </button>
    </div>
  )
}

