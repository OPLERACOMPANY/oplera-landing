'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, Zap, Crown, ArrowRight } from 'lucide-react'

export default function MaintenancePage() {
  const plans = [
    {
      name: 'Basic Stability Plan',
      icon: Shield,
      color: 'cyan',
      ideal: 'Small businesses or pilot projects',
      focus: 'Stability & minor fixes',
      price: '59 JOD',
      period: 'month',
      features: [
        'Ongoing monitoring for uptime and reliability',
        'Bug fixing & minor issue resolution',
        'Performance optimization',
        'Monthly health check report',
      ],
      gradient: 'from-oplera-cyan/10 to-oplera-cyan/20',
      borderColor: 'border-oplera-cyan/30',
      iconBg: 'bg-oplera-cyan/10',
      iconColor: 'text-oplera-cyan',
      buttonBg: 'bg-oplera-cyan hover:bg-oplera-cyan/90 text-oplera-navy',
    },
    {
      name: 'Enhanced Growth Plan',
      icon: Zap,
      color: 'cyan',
      ideal: 'Active clients scaling their AI agents',
      focus: 'Feature upgrades & proactive improvements',
      price: '129 JOD',
      period: 'month',
      popular: true,
      features: [
        'Everything in Basic Stability Plan',
        'Small feature additions or workflow updates (monthly quota)',
        'Priority response within 24h',
        'Quarterly performance review with insights & recommendations',
      ],
      gradient: 'from-oplera-cyan/20 to-oplera-blue/20',
      borderColor: 'border-oplera-cyan/50',
      iconBg: 'bg-oplera-cyan/10',
      iconColor: 'text-oplera-cyan',
      buttonBg: 'bg-oplera-cyan hover:bg-oplera-cyan/90 text-oplera-navy',
    },
    {
      name: 'Enterprise Assurance Plan',
      icon: Crown,
      color: 'blue',
      ideal: 'Enterprises or mission-critical agents',
      focus: 'Custom development, full support coverage',
      price: 'Custom Quote',
      period: '',
      features: [
        'All features from Enhanced Growth Plan',
        'Dedicated technical support manager',
        'Advanced integrations & API maintenance',
        '24/7 response & emergency fixes',
        'Tailored SLA (Service-Level Agreement)',
      ],
      gradient: 'from-oplera-cyan/10 to-oplera-blue/20',
      borderColor: 'border-oplera-cyan/40',
      iconBg: 'bg-oplera-cyan/10',
      iconColor: 'text-oplera-cyan',
      buttonBg: 'bg-oplera-cyan hover:bg-oplera-cyan/90 text-oplera-navy',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-oplera-darker via-oplera-navy to-oplera-darker">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-oplera-cyan via-oplera-cyan/80 to-oplera-blue bg-clip-text text-transparent">
                Maintenance & Support Plans
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
              Tailored technical support and continuous improvement for your AI agents and automation systems
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Keep your AI systems running smoothly with Oplera's expert maintenance and support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative pricing-card bg-gradient-to-br ${plan.gradient} backdrop-blur-xl border ${plan.borderColor} rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-oplera-cyan shadow-lg shadow-oplera-cyan/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-oplera-cyan text-oplera-navy text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`${plan.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${plan.iconColor}`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                  {/* Ideal For */}
                  <p className="text-sm text-gray-400 mb-1">
                    <span className="font-semibold">Ideal for:</span> {plan.ideal}
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    <span className="font-semibold">Focus:</span> {plan.focus}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-gray-400 ml-2">/ {plan.period}</span>}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <p className="text-sm font-semibold text-gray-300 mb-3">Includes:</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-oplera-cyan flex-shrink-0 mr-3 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => (window.location.href = 'mailto:hello@oplera.ai?subject=Support Plan Inquiry')}
                    className={`w-full ${plan.buttonBg} text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center group`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism rounded-2xl p-8 text-center"
          >
            <div className="w-12 h-12 bg-oplera-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <p className="text-lg text-gray-300">
              All plans are managed by <span className="text-oplera-cyan font-semibold">Oplera's AI & technical team</span> to
              ensure long-term stability, performance, and continuous innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-oplera-cyan/10 to-oplera-blue/20 backdrop-blur-xl border border-oplera-cyan/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Not sure which plan is right for you?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss your specific needs and find the perfect support solution
            </p>
            <button
              onClick={() => (window.location.href = 'mailto:hello@oplera.ai?subject=Support Plan Consultation')}
              className="px-8 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold hover:bg-oplera-cyan/90 transition-all inline-flex items-center text-lg group"
            >
              Schedule a Consultation
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

