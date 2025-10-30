'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export function OpleraHero() {
  const { t } = useLanguage()
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-mesh pt-16">
      {/* Animated Particles Background - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-oplera-cyan rounded-full will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-['Poppins'] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.title')}<br />
            <span className="text-oplera-cyan">{t('hero.titleHighlight')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="/demo">
              <button className="px-8 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold shadow-xl shadow-oplera-cyan/50 hover:shadow-oplera-cyan/70 hover:scale-105 transition-all">
                {t('hero.ctaPrimary')}
              </button>
            </a>
            <a href="#solutions">
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-oplera-navy transition-all">
                {t('hero.ctaSecondary')}
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Floating Robot/Brain */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative animate-float"
          >
            {/* Glowing Brain/Robot SVG */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-oplera-cyan/20 blur-3xl rounded-full"></div>
              <svg viewBox="0 0 200 200" className="w-80 h-80 relative z-10">
                {/* Outer Ring - CSS animation instead */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#1EE3CF"
                  strokeWidth="2"
                  opacity="0.3"
                />
                {/* Middle Ring - CSS animation instead */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="#1EE3CF"
                  strokeWidth="2"
                  opacity="0.5"
                />
                {/* Inner Ring */}
                <circle cx="100" cy="100" r="40" fill="#1EE3CF" opacity="0.2" />
                {/* Core - simplified */}
                <circle
                  cx="100"
                  cy="100"
                  r="20"
                  fill="#1EE3CF"
                  opacity="0.9"
                  className="animate-pulse-slow"
                />
                <circle cx="100" cy="100" r="10" fill="#0C1F3C" />
                
                {/* Connection Nodes */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const x = 100 + 70 * Math.cos((angle * Math.PI) / 180)
                  const y = 100 + 70 * Math.sin((angle * Math.PI) / 180)
                  return (
                    <g key={i}>
                      <line x1="100" y1="100" x2={x} y2={y} stroke="#1EE3CF" strokeWidth="1" opacity="0.3" />
                      <circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#1EE3CF"
                        opacity="0.8"
                      />
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

