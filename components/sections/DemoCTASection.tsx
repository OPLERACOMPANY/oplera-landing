'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export function DemoCTASection() {
  const { t } = useLanguage()
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated Network Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E3F8F] via-[#1E5F8C] to-[#0C7B93]">
        {/* Network nodes and connections */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="white" opacity="0.4"/>
              <line x1="50" y1="50" x2="100" y2="0" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              <line x1="50" y1="50" x2="0" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              <line x1="50" y1="50" x2="100" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
        
        {/* Animated dots - Reduced for performance */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-white">
            {t('demoCTA.title')}
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('demoCTA.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/demo">
              <button className="px-12 py-5 bg-white text-[#2E3F8F] rounded-lg font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
                {t('demoCTA.ctaPrimary')}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

