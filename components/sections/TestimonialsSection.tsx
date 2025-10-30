'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'
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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    variants={itemVariants}
    className="glassmorphism rounded-lg p-6 feature-card"
  >
    <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-oplera-cyan rounded-full flex items-center justify-center mr-4">
        <span className="text-oplera-navy font-semibold text-lg">{testimonial.author.initials}</span>
      </div>
      <div>
        <div className="font-semibold">{testimonial.author.name}</div>
        <div className="text-sm text-gray-400">{testimonial.author.role} at {testimonial.author.company}</div>
      </div>
    </div>
  </motion.div>
)

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t('testimonials.title')} <span className="text-oplera-cyan">{t('testimonials.titleHighlight')}</span>
        </motion.h2>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}