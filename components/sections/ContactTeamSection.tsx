'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Expert {
  id: string
  name: string
  role: string
  specialty: string
  avatar: string
  available: boolean
  calendlyUrl?: string
}

const experts: Expert[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    role: 'AI Solutions Architect',
    specialty: 'Custom AI Agents & Workflow Design',
    avatar: '👨‍💼',
    available: true,
    calendlyUrl: 'https://calendly.com/oplera-ahmed',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    role: 'Automation Specialist',
    specialty: 'Integration & Process Optimization',
    avatar: '👩‍💻',
    available: true,
    calendlyUrl: 'https://calendly.com/oplera-sarah',
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Technical Lead',
    specialty: 'Complex Systems & Architecture',
    avatar: '👨‍🔬',
    available: false,
    calendlyUrl: 'https://calendly.com/oplera-david',
  },
]

const contactMethods = [
  {
    icon: '📧',
    title: 'Email Us',
    description: 'Get a response within 24 hours',
    action: 'hello@oplera.ai',
    link: 'mailto:hello@oplera.ai',
  },
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Talk to our team instantly',
    action: 'Start Chat',
    link: '#chat',
  },
  {
    icon: '📱',
    title: 'WhatsApp',
    description: 'Quick questions on the go',
    action: '+1 (555) 123-4567',
    link: 'https://wa.me/15551234567',
  },
]

export function ContactTeamSection() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })

  const handleScheduleMeeting = (expert: Expert) => {
    setSelectedExpert(expert)
    // In production, this would open Calendly or your scheduling tool
    window.open(expert.calendlyUrl || '#', '_blank')
  }

  const handleQuickContact = (method: typeof contactMethods[0]) => {
    if (method.link.startsWith('mailto:') || method.link.startsWith('https://')) {
      window.open(method.link, '_blank')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-oplera-cyan/5 to-transparent"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-oplera-cyan/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Let's Build Something <span className="text-oplera-cyan">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Talk to our AI automation experts. No sales pitch—just real conversations about transforming your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Meet Our Experts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-poppins mb-2">
                Schedule with an <span className="text-oplera-cyan">Expert</span>
              </h3>
              <p className="text-gray-400">Choose who you'd like to speak with based on your needs</p>
            </div>

            <div className="space-y-4">
              {experts.map((expert, index) => (
                <motion.div
                  key={expert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`glassmorphism rounded-xl p-6 border-2 transition-all cursor-pointer ${
                    expert.available 
                      ? 'border-oplera-cyan/30 hover:border-oplera-cyan' 
                      : 'border-gray-700/30 opacity-60'
                  }`}
                  onClick={() => expert.available && handleScheduleMeeting(expert)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{expert.avatar}</div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xl font-semibold text-white">{expert.name}</h4>
                        {expert.available ? (
                          <span className="flex items-center gap-1 text-xs text-oplera-cyan">
                            <span className="w-2 h-2 bg-oplera-cyan rounded-full animate-pulse"></span>
                            Available
                          </span>
                        ) : (
                          <span className="text-xs text-gray-500">Busy</span>
                        )}
                      </div>
                      <p className="text-sm text-oplera-cyan mb-2">{expert.role}</p>
                      <p className="text-sm text-gray-400 mb-3">{expert.specialty}</p>
                      
                      {expert.available && (
                        <button className="text-sm px-4 py-2 bg-oplera-cyan/10 border border-oplera-cyan/30 text-oplera-cyan rounded-lg hover:bg-oplera-cyan hover:text-oplera-navy transition-all font-semibold">
                          Schedule a Meeting →
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Methods */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Or reach out directly:</h4>
              <div className="grid grid-cols-3 gap-3">
                {contactMethods.map((method, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleQuickContact(method)}
                    className="glassmorphism rounded-lg p-4 border border-oplera-cyan/20 hover:border-oplera-cyan transition-all text-center group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{method.icon}</div>
                    <p className="text-xs font-semibold text-white mb-1">{method.title}</p>
                    <p className="text-xs text-gray-400">{method.description}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glassmorphism rounded-2xl p-8 border-2 border-oplera-cyan/30">
              <h3 className="text-2xl font-bold font-poppins mb-2">
                Tell Us About Your <span className="text-oplera-cyan">Project</span>
              </h3>
              <p className="text-gray-400 mb-6">We'll match you with the right expert and get back to you within 24 hours</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted! We will contact you soon.'); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-oplera-navy/50 border border-oplera-cyan/30 rounded-lg text-white focus:outline-none focus:border-oplera-cyan transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-oplera-navy/50 border border-oplera-cyan/30 rounded-lg text-white focus:outline-none focus:border-oplera-cyan transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-oplera-navy/50 border border-oplera-cyan/30 rounded-lg text-white focus:outline-none focus:border-oplera-cyan transition-colors"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">What do you need help with? *</label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-oplera-navy/50 border border-oplera-cyan/30 rounded-lg text-white focus:outline-none focus:border-oplera-cyan transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="ai-agent">Custom AI Agent</option>
                    <option value="workflow">Workflow Automation</option>
                    <option value="integration">System Integration</option>
                    <option value="consulting">Strategy Consulting</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your project *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-oplera-navy/50 border border-oplera-cyan/30 rounded-lg text-white focus:outline-none focus:border-oplera-cyan transition-colors resize-none"
                    placeholder="Describe your automation needs, challenges, or goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-oplera-cyan to-[#15B3A3] text-oplera-navy rounded-lg font-bold text-lg shadow-xl shadow-oplera-cyan/50 hover:shadow-oplera-cyan/70 hover:scale-[1.02] transition-all"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center">
                  🔒 Your information is secure and will never be shared with third parties
                </p>
              </form>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <span className="text-oplera-cyan">✓</span>
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-oplera-cyan">✓</span>
                <span>No Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-oplera-cyan">✓</span>
                <span>Free Consultation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats/Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '24hrs', label: 'Avg Response Time' },
            { value: '95%', label: 'Client Satisfaction' },
            { value: '15+', label: 'Industries Served' },
          ].map((stat, index) => (
            <div key={index} className="text-center glassmorphism rounded-lg p-6 border border-oplera-cyan/20">
              <div className="text-3xl font-bold text-oplera-cyan mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

