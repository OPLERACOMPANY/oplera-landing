'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Bell } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ComingSoonPageProps {
  icon: string
  title: string
  description: string
  features?: string[]
}

export function ComingSoonPage({ icon, title, description, features }: ComingSoonPageProps) {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-b from-oplera-darker via-oplera-navy to-oplera-darker">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push('/')}
          className="flex items-center text-oplera-cyan hover:text-oplera-cyan/80 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="text-8xl mb-8 animate-bounce">{icon}</div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-oplera-cyan to-oplera-cyan/80 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            {description}
          </p>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <div className="bg-oplera-cyan/10 border-2 border-oplera-cyan/50 rounded-2xl px-8 py-4 mb-12">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-oplera-cyan" />
                <span className="text-2xl font-bold text-white">Coming Soon</span>
                <Calendar className="w-6 h-6 text-oplera-cyan" />
              </div>
            </div>
          </motion.div>

          {/* Features Preview (if provided) */}
          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto mb-12"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
                <span>✨</span> What to Expect
              </h3>
              <ul className="space-y-3 text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-oplera-cyan mr-3 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Notify Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-oplera-cyan/10 to-oplera-blue/20 backdrop-blur-xl border border-oplera-cyan/30 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <Bell className="w-10 h-10 text-oplera-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Get Notified When It Launches</h3>
            <p className="text-gray-300 mb-6">
              Want to be the first to know when {title} is ready? Contact us to join the waitlist.
            </p>
            <button
              onClick={() => (window.location.href = 'mailto:hello@oplera.ai?subject=Waitlist: ' + title)}
              className="px-8 py-3 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold hover:bg-oplera-cyan/90 transition-all inline-flex items-center group"
            >
              Join Waitlist
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">In the meantime, check out our available solution:</p>
          <button
            onClick={() => router.push('/omni-support')}
            className="text-oplera-cyan hover:text-oplera-cyan/80 transition-colors font-semibold"
          >
            Explore Omni Support Agent →
          </button>
        </motion.div>
      </div>
    </main>
  )
}

