'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check, Mail, Phone, Building, Globe, Target, Calendar, MessageSquare } from 'lucide-react'

type FormData = {
  fullName: string
  businessEmail: string
  phoneNumber: string
  companyName: string
  industry: string
  websiteUrl: string
  socialMediaLinks: string
  automationGoal: string
  preferredChannel: string[]
  solutionType: string
  timeline: string
  message: string
}

const steps = [
  { id: 1, title: 'About You', icon: '👤', fields: ['fullName', 'businessEmail', 'phoneNumber'] },
  { id: 2, title: 'Your Business', icon: '🏢', fields: ['companyName', 'industry', 'websiteUrl', 'socialMediaLinks'] },
  { id: 3, title: 'Automation Needs', icon: '🤖', fields: ['automationGoal', 'preferredChannel', 'solutionType'] },
  { id: 4, title: 'Timeline & Details', icon: '📅', fields: ['timeline', 'message'] }
]

const industries = [
  'E-commerce', 'Construction', 'SaaS', 'Retail', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Real Estate', 'Other'
]

const channels = [
  { value: 'Telegram', icon: '✈️', color: 'from-blue-500 to-cyan-500' },
  { value: 'WhatsApp', icon: '💬', color: 'from-green-500 to-emerald-500' },
  { value: 'Web', icon: '🌐', color: 'from-purple-500 to-pink-500' },
  { value: 'API', icon: '⚡', color: 'from-orange-500 to-red-500' }
]

const solutionTypes = [
  { value: 'Starter Setup', label: 'Starter Setup', desc: 'Quick start for small teams', price: 'From 199 JOD' },
  { value: 'Standard Agent', label: 'Standard Agent', desc: 'Full-featured AI automation', price: 'From 499 JOD' },
  { value: 'Custom Solution', label: 'Custom Enterprise', desc: 'Tailored to your needs', price: 'Custom Quote' },
  { value: 'Not sure yet', label: 'Not Sure Yet', desc: 'Let us help you decide', price: 'Free Consultation' }
]

const timelines = [
  { value: 'Immediately', icon: '🚀', label: 'Start Immediately', desc: 'Ready to launch now' },
  { value: 'This Month', icon: '📆', label: 'This Month', desc: 'Within 30 days' },
  { value: '1–3 Months', icon: '📅', label: '1–3 Months', desc: 'Planning phase' },
  { value: 'Just Exploring', icon: '🔍', label: 'Just Exploring', desc: 'Learning about options' }
]

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<FormData>({
    fullName: '', businessEmail: '', phoneNumber: '', companyName: '', industry: '',
    websiteUrl: '', socialMediaLinks: '', automationGoal: '', preferredChannel: [],
    solutionType: '', timeline: '', message: ''
  })

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleChannelToggle = (channel: string) => {
    setFormData(prev => ({
      ...prev,
      preferredChannel: prev.preferredChannel.includes(channel)
        ? prev.preferredChannel.filter(c => c !== channel)
        : [...prev.preferredChannel, channel]
    }))
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
      if (!formData.businessEmail.trim()) newErrors.businessEmail = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) newErrors.businessEmail = 'Invalid email format'
    }
    
    if (step === 2) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
      if (!formData.industry) newErrors.industry = 'Please select an industry'
    }
    
    if (step === 3) {
      if (!formData.automationGoal.trim()) newErrors.automationGoal = 'Please describe your automation goals'
      if (!formData.solutionType) newErrors.solutionType = 'Please select a solution type'
    }
    
    if (step === 4) {
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(Math.min(steps.length, currentStep + 1))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(Math.max(1, currentStep - 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Submission failed')
      setIsSubmitted(true)
    } catch (err) {
      alert('There was an error submitting your request. Please try again.')
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-oplera-cyan to-oplera-purple flex items-center justify-center shadow-2xl shadow-oplera-cyan/50"
          >
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
          >
            Thank You, {formData.fullName.split(' ')[0]}! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-6"
          >
            We've received your demo request for <span className="text-oplera-cyan font-semibold">{formData.companyName}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glassmorphism rounded-xl p-6 mb-8 border border-oplera-cyan/30"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">What happens next?</h3>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-oplera-cyan mr-3 mt-1">✓</span>
                <span>Our AI consultant will review your requirements within <strong className="text-white">24 hours</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-oplera-cyan mr-3 mt-1">✓</span>
                <span>We'll prepare a customized demo tailored to your use case</span>
              </li>
              <li className="flex items-start">
                <span className="text-oplera-cyan mr-3 mt-1">✓</span>
                <span>You'll receive a meeting invite to discuss your automation strategy</span>
              </li>
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-sm"
          >
            ⚡ No spam — only tailored solutions from Oplera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <a
              href="/"
              className="inline-block px-8 py-3 border-2 border-oplera-cyan text-oplera-cyan rounded-lg font-semibold hover:bg-oplera-cyan hover:text-oplera-navy transition-all"
            >
              Back to Home
            </a>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
            Request a <span className="text-oplera-cyan">Demo</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's understand your project — so we can match you with the right AI automation solution.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-12">
          {/* Progress Bar */}
          <div className="relative mb-8">
            <div className="h-2 bg-oplera-navy/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-oplera-cyan to-oplera-purple"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all mb-2 ${
                      currentStep >= step.id
                        ? 'bg-gradient-to-br from-oplera-cyan to-oplera-purple text-white shadow-lg shadow-oplera-cyan/50'
                        : 'bg-oplera-navy/50 text-gray-400 border-2 border-oplera-cyan/30'
                    }`}
                  >
                    {currentStep > step.id ? <Check size={24} /> : <span className="text-2xl">{step.icon}</span>}
                  </div>
                  <span className={`text-xs font-medium text-center hidden sm:block ${currentStep >= step.id ? 'text-white' : 'text-gray-500'}`}>
                    {step.title}
                  </span>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 rounded transition-all ${currentStep > step.id ? 'bg-oplera-cyan' : 'bg-oplera-navy/50'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glassmorphism rounded-2xl p-8 md:p-10 border-2 border-oplera-cyan/30 shadow-2xl">
          <AnimatePresence mode="wait">
            {/* Step 1: About You */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-oplera-cyan/20 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-3xl font-bold font-poppins">Tell Us About You</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Mail size={16} className="text-oplera-cyan" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-4 bg-oplera-navy/50 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-oplera-cyan/30 focus:border-oplera-cyan'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Mail size={16} className="text-oplera-cyan" />
                    Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                    className={`w-full px-4 py-4 bg-oplera-navy/50 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                      errors.businessEmail ? 'border-red-500' : 'border-oplera-cyan/30 focus:border-oplera-cyan'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.businessEmail && <p className="text-red-400 text-sm mt-2">{errors.businessEmail}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Phone size={16} className="text-oplera-cyan" />
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full px-4 py-4 bg-oplera-navy/50 border-2 border-oplera-cyan/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-oplera-cyan transition-all"
                    placeholder="+962 XXX XXX XXX"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Your Business */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-oplera-cyan/20 flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-3xl font-bold font-poppins">About Your Business</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Building size={16} className="text-oplera-cyan" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className={`w-full px-4 py-4 bg-oplera-navy/50 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                      errors.companyName ? 'border-red-500' : 'border-oplera-cyan/30 focus:border-oplera-cyan'
                    }`}
                    placeholder="Your Company Ltd."
                  />
                  {errors.companyName && <p className="text-red-400 text-sm mt-2">{errors.companyName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industry / Business Type *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {industries.map((industry) => (
                      <button
                        key={industry}
                        type="button"
                        onClick={() => handleInputChange('industry', industry)}
                        className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                          formData.industry === industry
                            ? 'bg-oplera-cyan/20 border-oplera-cyan text-oplera-cyan'
                            : 'bg-oplera-navy/50 border-oplera-cyan/30 text-gray-300 hover:border-oplera-cyan'
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                  {errors.industry && <p className="text-red-400 text-sm mt-2">{errors.industry}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Globe size={16} className="text-oplera-cyan" />
                    Business Website URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                    className="w-full px-4 py-4 bg-oplera-navy/50 border-2 border-oplera-cyan/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-oplera-cyan transition-all"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Social Media Links (Optional)</label>
                  <textarea
                    value={formData.socialMediaLinks}
                    onChange={(e) => handleInputChange('socialMediaLinks', e.target.value)}
                    className="w-full px-4 py-4 bg-oplera-navy/50 border-2 border-oplera-cyan/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-oplera-cyan transition-all resize-none"
                    rows={3}
                    placeholder="Instagram, LinkedIn, or Facebook links (one per line)"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Automation Needs */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-oplera-cyan/20 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-3xl font-bold font-poppins">What Do You Need?</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Target size={16} className="text-oplera-cyan" />
                    What are you looking to automate? *
                  </label>
                  <textarea
                    value={formData.automationGoal}
                    onChange={(e) => handleInputChange('automationGoal', e.target.value)}
                    className={`w-full px-4 py-4 bg-oplera-navy/50 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all resize-none ${
                      errors.automationGoal ? 'border-red-500' : 'border-oplera-cyan/30 focus:border-oplera-cyan'
                    }`}
                    rows={4}
                    placeholder="Example: Customer service replies on WhatsApp and Telegram order tracking, handling 100+ daily inquiries..."
                  />
                  {errors.automationGoal && <p className="text-red-400 text-sm mt-2">{errors.automationGoal}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Preferred Channels (Select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {channels.map((channel) => (
                      <button
                        key={channel.value}
                        type="button"
                        onClick={() => handleChannelToggle(channel.value)}
                        className={`relative px-4 py-6 rounded-xl border-2 transition-all overflow-hidden group ${
                          formData.preferredChannel.includes(channel.value)
                            ? 'border-oplera-cyan shadow-lg shadow-oplera-cyan/30'
                            : 'border-oplera-cyan/30 hover:border-oplera-cyan'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                        <div className="relative">
                          <div className="text-3xl mb-2">{channel.icon}</div>
                          <p className={`font-semibold ${formData.preferredChannel.includes(channel.value) ? 'text-oplera-cyan' : 'text-white'}`}>
                            {channel.value}
                          </p>
                        </div>
                        {formData.preferredChannel.includes(channel.value) && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-oplera-cyan rounded-full flex items-center justify-center">
                            <Check size={14} className="text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Preferred Solution Type *</label>
                  <div className="grid gap-3">
                    {solutionTypes.map((solution) => (
                      <button
                        key={solution.value}
                        type="button"
                        onClick={() => handleInputChange('solutionType', solution.value)}
                        className={`px-6 py-4 rounded-xl border-2 text-left transition-all ${
                          formData.solutionType === solution.value
                            ? 'bg-oplera-cyan/10 border-oplera-cyan'
                            : 'bg-oplera-navy/50 border-oplera-cyan/30 hover:border-oplera-cyan'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className={`font-semibold mb-1 ${formData.solutionType === solution.value ? 'text-oplera-cyan' : 'text-white'}`}>
                              {solution.label}
                            </h4>
                            <p className="text-sm text-gray-400">{solution.desc}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-oplera-cyan font-bold text-sm">{solution.price}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.solutionType && <p className="text-red-400 text-sm mt-2">{errors.solutionType}</p>}
                </div>
              </motion.div>
            )}

            {/* Step 4: Timeline & Details */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-oplera-cyan/20 flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h3 className="text-3xl font-bold font-poppins">Final Details</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                    <Calendar size={16} className="text-oplera-cyan" />
                    Timeline to Start *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {timelines.map((timeline) => (
                      <button
                        key={timeline.value}
                        type="button"
                        onClick={() => handleInputChange('timeline', timeline.value)}
                        className={`px-6 py-5 rounded-xl border-2 text-left transition-all ${
                          formData.timeline === timeline.value
                            ? 'bg-oplera-cyan/10 border-oplera-cyan'
                            : 'bg-oplera-navy/50 border-oplera-cyan/30 hover:border-oplera-cyan'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">{timeline.icon}</span>
                          <div>
                            <h4 className={`font-semibold mb-1 ${formData.timeline === timeline.value ? 'text-oplera-cyan' : 'text-white'}`}>
                              {timeline.label}
                            </h4>
                            <p className="text-sm text-gray-400">{timeline.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.timeline && <p className="text-red-400 text-sm mt-2">{errors.timeline}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-oplera-cyan" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-4 bg-oplera-navy/50 border-2 border-oplera-cyan/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-oplera-cyan transition-all resize-none"
                    rows={4}
                    placeholder="Any specific requirements, questions, or details you'd like us to know..."
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 pt-8 border-t border-oplera-cyan/20">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-6 py-3 border-2 border-oplera-cyan/30 text-gray-300 rounded-xl font-semibold hover:border-oplera-cyan hover:text-oplera-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-to-r from-oplera-cyan to-oplera-purple text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-oplera-cyan/50 transition-all flex items-center gap-2"
              >
                Next Step
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-oplera-cyan to-oplera-purple text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-oplera-cyan/50 hover:scale-105 transition-all"
              >
                Get My Custom Proposal 🚀
              </button>
            )}
          </div>
        </form>

        <p className="text-center text-gray-400 mt-8 text-sm">
          🔒 Your information is secure and will only be used to provide you with a customized demo.
        </p>
      </div>
    </div>
  )
}
