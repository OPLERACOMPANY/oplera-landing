'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    icon: '💬',
    title: 'Multimodal Understanding',
    description: 'Understands both text and images.',
    benefit: 'Handle customer photos, screenshots, and messages seamlessly.'
  },
  {
    icon: '⚙️',
    title: 'Seamless Integrations',
    description: 'Connects to Telegram, WhatsApp, and web instantly.',
    benefit: 'Deploy across all your channels without complex setup.'
  },
  {
    icon: '📊',
    title: 'Real-Time Insights',
    description: 'Tracks and improves support response in real time.',
    benefit: 'Monitor performance and optimize agent behavior live.'
  },
  {
    icon: '🤖',
    title: 'Continuous Learning',
    description: 'Gets smarter with every interaction.',
    benefit: 'Your agent evolves with your business needs automatically.'
  }
]

export default function OmniSupportPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">🤖</div>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
                Meet <span className="text-oplera-cyan">Omni</span> – Your AI Support Agent
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Understands text, images, and customer intent instantly. Designed to automate your support, not just answer questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold shadow-xl shadow-oplera-cyan/50 hover:shadow-oplera-cyan/70 hover:scale-105 transition-all text-center"
                >
                  Try the Live Demo
                </Link>
                <a
                  href="mailto:hello@oplera.ai"
                  className="px-8 py-4 border-2 border-oplera-cyan text-oplera-cyan rounded-lg font-semibold hover:bg-oplera-cyan hover:text-oplera-navy transition-all text-center"
                >
                  Book an Implementation Call
                </a>
              </div>
            </motion.div>

            {/* Hero visual - animated icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-oplera-cyan/20 blur-3xl rounded-full" />
                
                {/* Main icon */}
                <div className="relative text-[200px] animate-float filter drop-shadow-2xl">
                  🤖
                </div>
                
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 border-2 border-oplera-cyan/20 rounded-full animate-pulse-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-80 h-80 border border-oplera-violet/10 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-oplera-cyan/5 to-transparent pointer-events-none" />
        
        {/* Floating particles - optimized */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-oplera-cyan/20 rounded-full will-change-transform"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="w-full max-w-6xl mx-auto relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Watch Omni in <span className="text-oplera-cyan">Action</span>
            </h2>
            <p className="text-xl text-gray-300">
              A short demo showing how Omni analyzes messages and automates responses in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full p-0 sm:p-4 md:p-6"
          >
            {/* Gradient glow wrapper for video */}
            <div className="bg-gradient-to-b from-oplera-cyan/10 to-oplera-violet/5 rounded-3xl p-[2px] shadow-2xl shadow-oplera-cyan/20">
              <div className="bg-oplera-navy/40 backdrop-blur-sm rounded-3xl p-4 md:p-6">
                {/* Video Embed - Bunny.net CDN - Native HTML5 Video */}
                <div className="mb-6">
                  {/* 16:9 Aspect Ratio Container */}
                  <div className="relative w-full overflow-hidden rounded-3xl border border-oplera-cyan/20 shadow-lg" style={{ paddingTop: '56.25%' }}>
                    {/* 
                      📺 TO GET YOUR BUNNY VIDEO URLS:
                      1. Go to: https://dash.bunny.net/stream
                      2. Click your video: 33ecf3c9-8edc-4630-8fc1-0097f15805a3
                      3. Copy "HLS Playlist URL" → Replace src below
                      4. Copy "Thumbnail URL" → Replace poster below
                    */}
                    <video
                      className="absolute top-0 left-0 w-full h-full rounded-3xl object-cover"
                      controls
                      preload="metadata"
                      poster="https://vz-c5b883c0-a50.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/thumbnail.jpg"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source 
                        src="https://vz-c5b883c0-a50.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/playlist.m3u8" 
                        type="application/x-mpegURL" 
                      />
                      {/* Fallback MP4 for browsers that don't support HLS */}
                      <source 
                        src="https://vz-c5b883c0-a50.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/play_720p.mp4" 
                        type="video/mp4" 
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* CTAs below video */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/demo"
                    className="px-8 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold shadow-xl shadow-oplera-cyan/30 hover:shadow-oplera-cyan/50 hover:scale-105 transition-all text-center"
                  >
                    Try Live Demo
                  </Link>
                  <a
                    href="mailto:hello@oplera.ai"
                    className="px-8 py-4 border-2 border-oplera-cyan text-oplera-cyan rounded-lg font-semibold hover:bg-oplera-cyan hover:text-oplera-navy transition-all text-center"
                  >
                    Book Implementation Call
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section> 

      {/* Features & Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16"
          >
            Features & <span className="text-oplera-cyan">Capabilities</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl p-8 border border-oplera-cyan/30 hover:border-oplera-cyan/60 hover:shadow-lg hover:shadow-oplera-cyan/20 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-oplera-cyan mb-2">{feature.description}</p>
                <p className="text-gray-400 text-sm">{feature.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Options */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-oplera-cyan/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Choose Your <span className="text-oplera-cyan">Implementation Path</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you need a quick start or a fully customized enterprise solution, we've got you covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Setup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-oplera-navy/30 backdrop-blur-sm rounded-2xl p-8 border border-oplera-cyan/20 hover:border-oplera-cyan/60 hover:shadow-xl hover:shadow-oplera-cyan/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-oplera-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-poppins mb-2 text-white">Basic Setup</h3>
                  <div className="text-3xl font-bold text-oplera-cyan mb-2">
                    Starting from 199 JOD
                  </div>
                  <p className="text-sm text-gray-400">Perfect for getting started quickly</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                    <span className="text-gray-300">1 AI Agent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                    <span className="text-gray-300">Single-channel (Telegram or Web)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                    <span className="text-gray-300">Basic prompt tuning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                    <span className="text-gray-300">Email setup support</span>
                  </li>
                </ul>

                <Link
                  href="/demo"
                  className="block w-full px-6 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold text-center hover:scale-105 hover:shadow-lg hover:shadow-oplera-cyan/30 transition-all"
                >
                  Request Basic Setup
                </Link>
              </div>
            </motion.div>

            {/* Custom Enterprise Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-oplera-navy/30 backdrop-blur-sm rounded-2xl p-8 border border-oplera-cyan/40 hover:border-oplera-cyan hover:shadow-2xl hover:shadow-oplera-cyan/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Popular badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-oplera-cyan/20 text-oplera-cyan text-xs font-bold rounded-full border border-oplera-cyan/50 shadow-lg shadow-oplera-cyan/20">
                  POPULAR
                </span>
              </div>

              {/* Stronger glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-oplera-cyan/10 to-oplera-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-poppins mb-2 text-white">Enterprise Solution</h3>
                  <div className="text-3xl font-bold text-oplera-cyan mb-2">
                    Custom Quote
                  </div>
                  <p className="text-sm text-gray-400">Tailored to your specific needs</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                    <span className="text-gray-300">Multi-channel integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                    <span className="text-gray-300">Complex workflows + API connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                    <span className="text-gray-300">Custom training and analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                    <span className="text-gray-300">Priority support & dedicated account manager</span>
                  </li>
                </ul>

                <a
                  href="mailto:hello@oplera.ai"
                  className="block w-full px-6 py-4 border-2 border-oplera-cyan text-oplera-cyan rounded-lg font-semibold text-center hover:bg-oplera-cyan hover:text-oplera-navy hover:scale-105 hover:shadow-lg hover:shadow-oplera-cyan/30 transition-all"
                >
                  Request Custom Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism rounded-2xl p-12 border border-oplera-cyan/30 text-center"
          >
            <p className="text-2xl md:text-3xl text-gray-200 mb-6 italic">
              "Oplera's Omni Agent reduced our manual support load by 60% in one week."
            </p>
            <p className="text-oplera-cyan font-semibold text-lg">
              — SmartHack Store
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-oplera-cyan/10 via-transparent to-oplera-purple/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Ready to Automate Your <span className="text-oplera-cyan shimmer-text">Support?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's build your intelligent agent together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:hello@oplera.ai"
                className="px-10 py-5 bg-oplera-cyan text-oplera-navy rounded-lg font-bold text-lg shadow-xl shadow-oplera-cyan/50 hover:shadow-oplera-cyan/70 hover:scale-105 transition-all"
              >
                Book a Call
              </a>
              <Link
                href="/demo"
                className="px-10 py-5 border-2 border-oplera-cyan text-oplera-cyan rounded-lg font-bold text-lg hover:bg-oplera-cyan hover:text-oplera-navy transition-all"
              >
                Try Live Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
