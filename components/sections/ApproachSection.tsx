'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function ApproachSection() {
  const { t } = useLanguage()

  const approaches = [
    {
      number: '01',
      title: t('approach.step1Title'),
      description: t('approach.step1Desc'),
      icon: '🔍',
    },
    {
      number: '02',
      title: t('approach.step2Title'),
      description: t('approach.step2Desc'),
      icon: '🎯',
    },
    {
      number: '03',
      title: t('approach.step3Title'),
      description: t('approach.step3Desc'),
      icon: '🔗',
    },
    {
      number: '04',
      title: t('approach.step4Title'),
      description: t('approach.step4Desc'),
      icon: '🚀',
    },
  ]

  return (
    <section id="approach" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-oplera-navy/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            {t('approach.title')} <span className="text-oplera-cyan">{t('approach.titleHighlight')}</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism rounded-xl p-8 feature-card group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-oplera-cyan/10 border border-oplera-cyan/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {approach.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="text-oplera-cyan/50 font-bold text-sm mb-2">{approach.number}</div>
                  <h3 className="text-2xl font-bold font-poppins mb-3 text-white">
                    {approach.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solution CTA - Commented out, using DemoCTASection instead */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism rounded-2xl p-12 max-w-4xl mx-auto border-2 border-oplera-cyan/30">
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready for a <span className="text-oplera-cyan">Custom Solution?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Every project starts with understanding your unique needs. Let's discuss how AI can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold shadow-xl shadow-oplera-cyan/50 hover:shadow-oplera-cyan/70 hover:scale-105 transition-all">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border-2 border-oplera-cyan text-oplera-cyan rounded-lg font-semibold hover:bg-oplera-cyan hover:text-oplera-navy transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

