'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface ComingSoonProps {
  serviceName?: string
  icon?: string
  description?: string
}

export function ComingSoon({ 
  serviceName = "This Service", 
  icon = "⚙️",
  description = "We're adding smarter features soon. Stay tuned!"
}: ComingSoonProps) {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setShowModal(false)
      setSubmitted(false)
      setEmail('')
    }, 2000)
  }

  // Split service name for styling
  const nameWords = serviceName.split(' ')
  const firstWord = nameWords[0]
  const restWords = nameWords.slice(1).join(' ')

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'radial-gradient(circle at 30% 20%, #102347, #061224)'
    }}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#1EE3CF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Animated Icon with Glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-block mb-8"
            style={{
              filter: 'drop-shadow(0 0 15px #1EE3CF60)',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="text-8xl"
            >
              {icon}
            </motion.div>
          </motion.div>

          {/* Service Name with Dynamic Styling */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold font-poppins mb-6"
          >
            <span className="text-white">{firstWord}</span>{' '}
            <span className="text-gray-200">{restWords}</span> is{' '}
            <span 
              className="bg-gradient-to-r from-[#1EE3CF] to-[#0CFFD7] bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 10px #1EE3CF80)',
              }}
            >
              Coming Soon
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <button className="px-8 py-3 bg-[#1EE3CF] text-[#0C1F3C] rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-[#1EE3CF]/30 hover:shadow-[#1EE3CF]/50">
                Back to Home
              </button>
            </Link>
            <button 
              onClick={() => setShowModal(true)}
              className="px-8 py-3 border-2 border-[#1EE3CF] text-[#1EE3CF] rounded-lg font-semibold hover:bg-[#1EE3CF] hover:text-[#0C1F3C] hover:scale-105 transition-all duration-300"
            >
              Get Notified When Ready
            </button>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-16"
        >
          <p className="text-sm text-gray-400 mb-4 text-center">Development Progress</p>
          <div className="max-w-md mx-auto bg-[#0C1F3C]/50 rounded-full h-3 overflow-hidden border border-[#1EE3CF]/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-full rounded-full relative"
              style={{
                background: 'linear-gradient(90deg, #1EE3CF, #0CFFD7, #1EE3CF)',
                backgroundSize: '300% 100%',
                boxShadow: '0 0 10px #1EE3CF80',
              }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  background: 'linear-gradient(90deg, #1EE3CF, #0CFFD7, #1EE3CF)',
                  backgroundSize: '300% 100%',
                }}
              />
            </motion.div>
          </div>
          <p className="text-sm text-[#1EE3CF] mt-2 text-center font-semibold">65% Complete</p>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-[#1EE3CF]/20 mb-16"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#1EE3CF]">What to Expect:</h3>
          <ul className="space-y-4">
            {[
              { icon: '⚡', text: 'AI-powered intelligent automation' },
              { icon: '🤖', text: 'Seamless integration with your existing tools' },
              { icon: '📊', text: 'Real-time analytics and insights' },
              { icon: '⏱️', text: '24/7 automated support' },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-gray-300 font-light">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Meet Omni Teaser Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-[#1EE3CF]/20"
        >
          <h3 className="text-2xl font-bold font-poppins mb-3 text-center">
            Meet <span className="text-[#1EE3CF]">{firstWord}</span> (Soon)
          </h3>
          <p className="text-gray-300 text-center mb-6 font-light">
            Our multimodal support agent that understands text and images.
          </p>
          
          {/* Abstract AI Brain Illustration */}
          <div className="flex justify-center">
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: 'linear'
              }}
              className="relative w-32 h-32"
            >
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #1EE3CF40, transparent)',
                  filter: 'blur(20px)',
                }}
              />
              <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                {/* Outer ring */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="#1EE3CF" strokeWidth="1" opacity="0.3"/>
                {/* Middle ring */}
                <circle cx="50" cy="50" r="30" fill="none" stroke="#1EE3CF" strokeWidth="1" opacity="0.5"/>
                {/* Inner circle */}
                <circle cx="50" cy="50" r="15" fill="#1EE3CF" opacity="0.3"/>
                {/* Core */}
                <circle cx="50" cy="50" r="8" fill="#1EE3CF"/>
                
                {/* Connection nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const x = 50 + 35 * Math.cos((angle * Math.PI) / 180)
                  const y = 50 + 35 * Math.sin((angle * Math.PI) / 180)
                  return (
                    <g key={i}>
                      <line x1="50" y1="50" x2={x} y2={y} stroke="#1EE3CF" strokeWidth="0.5" opacity="0.4"/>
                      <circle cx={x} cy={y} r="2" fill="#1EE3CF">
                        <animate attributeName="r" values="2;4;2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite"/>
                      </circle>
                    </g>
                  )
                })}
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Notification Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0C1F3C] border-2 border-[#1EE3CF]/30 rounded-xl p-8 max-w-md w-full"
            >
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold font-poppins mb-4 text-white">
                    Get Notified
                  </h3>
                  <p className="text-gray-300 mb-6 font-light">
                    Enter your email and we'll notify you when {serviceName} is ready!
                  </p>
                  <form onSubmit={handleNotifySubmit}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 border border-[#1EE3CF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#1EE3CF] transition-colors mb-4"
                    />
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-[#1EE3CF] text-[#0C1F3C] rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                      >
                        Notify Me
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="px-6 py-3 border border-[#1EE3CF]/30 text-gray-300 rounded-lg hover:bg-white/5 transition-all duration-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-[#1EE3CF] mb-2">Success!</h3>
                  <p className="text-gray-300 font-light">We'll notify you when it's ready.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
