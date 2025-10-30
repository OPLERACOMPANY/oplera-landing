'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

interface Service {
  id: string
  icon: string
  title: string
  description: string
  link: string
  available: boolean
}

export function ServicesSection() {
  const { t } = useLanguage()

  const services: Service[] = [
    {
      id: '1',
      icon: '🤖',
      title: 'Omni Support Agent',
      description: 'Unified AI agent that handles chats, orders, and FAQs using text & image understanding. Works across WhatsApp, Telegram, and web chat widgets.',
      link: '/omni-support',
      available: true,
    },
    {
      id: '2',
      icon: '📩',
      title: 'Email AI Agent',
      description: 'Reads, classifies, and replies to incoming emails — from client inquiries to support requests — fully automated.',
      link: '/email-agent',
      available: false,
    },
    {
      id: '3',
      icon: '💬',
      title: 'Sales AI Agent',
      description: 'Engages new leads, qualifies prospects, and books meetings or demos automatically.',
      link: '/sales-agent',
      available: false,
    },
    {
      id: '4',
      icon: '📊',
      title: 'CRM Assistant Agent',
      description: 'Syncs customer data, updates pipelines, and keeps your CRM always up-to-date through automation.',
      link: '/crm-assistant',
      available: false,
    },
    {
      id: '5',
      icon: '🎙',
      title: 'AI Voice Agent',
      description: 'Handles phone calls and voice messages using real speech recognition and intent understanding.',
      link: '/voice-agent',
      available: false,
    },
    {
      id: '6',
      icon: '💉',
      title: 'Clinic AI Agent',
      description: 'Manages patient appointments, responds to inquiries, and automates reminders for clinics & healthcare centers.',
      link: '/clinic-agent',
      available: false,
    },
  ]

  return (
    <section id="solutions" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-['Poppins'] text-center mb-16"
        >
          {t('services.title')} <span className="text-oplera-cyan">{t('services.titleHighlight') || 'Solutions'}</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link href={service.link}>
                <div className="bg-oplera-navy/40 backdrop-blur-sm border border-oplera-cyan/30 rounded-xl p-6 hover:border-oplera-cyan hover:scale-105 transition-all cursor-pointer group h-full relative">
                  {!service.available && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs bg-oplera-cyan/20 text-oplera-cyan px-2 py-1 rounded-full border border-oplera-cyan/30">
                        {t('services.comingSoon')}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-['Poppins'] mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                  
                  <div className="mt-4 flex items-center text-oplera-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('services.learnMore')} →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

