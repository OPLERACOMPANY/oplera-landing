'use client'

/**
 * Reusable Product Page Template
 * 
 * A fully customizable template for all Oplera AI product pages.
 * Import product data from JSON and pass it as props.
 * 
 * Usage:
 * ```tsx
 * import { ProductPageTemplate } from '@/components/ProductPageTemplate'
 * import productData from '@/data/products/omni-support.json'
 * 
 * export default function ProductPage() {
 *   return <ProductPageTemplate data={productData} />
 * }
 * ```
 */

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ProductPageData } from '@/types/product'

interface ProductPageTemplateProps {
  data: ProductPageData
}
interface HeroSection {
  icon?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
  primaryCTA?: { href: string; label: string }
  secondaryCTA?: { href: string; label: string }
}

export function ProductPageTemplate({ data }: ProductPageTemplateProps) {
  const { 
    hero = {} as HeroSection, 
    video = {}, 
    features = { sectionTitle: '', sectionTitleHighlight: '', items: [] }, 
    implementation = { sectionTitle: '', sectionTitleHighlight: '', subtitle: '', options: [] }, 
    finalCTA = {} 
  } = data || {}
  
  
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
              <div className="text-6xl mb-6">{hero.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
                {hero.title}
                {hero.titleHighlight && (
                  <span className="text-oplera-cyan">{hero.titleHighlight}</span>
                )}
                {!hero.titleHighlight && ' – Your AI Support Agent'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">{hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={hero.primaryCTA?.href || '#'}
                  className="px-8 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold shadow-xl shadow-oplera-cyan/50 hover:shadow-oplera-cyan/70 hover:scale-105 transition-all text-center"
                >
                  {hero.primaryCTA?.label || 'Get Started'}
                </Link>
                <a
                  href={hero.secondaryCTA?.href || '#'}
                  className="px-8 py-4 border-2 border-oplera-cyan text-oplera-cyan rounded-lg font-semibold hover:bg-oplera-cyan hover:text-oplera-navy transition-all text-center"
                >
                  {hero.secondaryCTA?.label || 'Learn More'}
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
                <div className="absolute inset-0 bg-oplera-cyan/20 blur-3xl rounded-full" />
                <div className="relative text-[200px] animate-float filter drop-shadow-2xl">
                  {hero.icon}
                </div>
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

      {/* Video Demo Section - Temporarily Disabled */}
      {/* <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-oplera-cyan/5 to-transparent pointer-events-none" />
        
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

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              {(video as any).sectionTitle}
              {(video as any).sectionTitleHighlight && (
                <span className="text-oplera-cyan">{(video as any).sectionTitleHighlight}</span>
              )}
            </h2>
            <p className="text-xl text-gray-300">{(video as any).description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism rounded-2xl p-6 md:p-8 border-2 border-oplera-cyan/30 shadow-2xl shadow-oplera-cyan/20"
          >
            <div className="relative rounded-2xl overflow-hidden border border-oplera-cyan/20 mb-8">
              <iframe
                src={(video as any).videoSrc}
                allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-[300px] md:h-[480px] bg-oplera-navy/50"
                title="Product Demo Video"
              />
              {(video as any).placeholderText && (
                <div className="absolute inset-0 bg-oplera-navy/90 flex items-center justify-center pointer-events-none">
                  <div className="text-center px-4">
                    <div className="text-8xl mb-4 animate-pulse">▶️</div>
                    <p className="text-xl text-gray-300">Demo Video Coming Soon</p>
                    <p className="text-sm text-gray-500 mt-2">{(video as any).placeholderText}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={(video as any).primaryCTA?.href || '#'}
                className="px-8 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold shadow-xl shadow-oplera-cyan/30 hover:shadow-oplera-cyan/50 hover:scale-105 transition-all text-center"
              >
                {(video as any).primaryCTA?.label || 'Get Started'}
              </Link>
              <a
                href={(video as any).secondaryCTA?.href || '#'}
                className="px-8 py-4 border-2 border-oplera-cyan text-oplera-cyan rounded-lg font-semibold hover:bg-oplera-cyan hover:text-oplera-navy transition-all text-center"
              >
                {(video as any).secondaryCTA?.label || 'Learn More'}
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}

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
            {features.sectionTitle}
            {features.sectionTitleHighlight && (
              <span className="text-oplera-cyan">{features.sectionTitleHighlight}</span>
            )}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl p-8 border border-oplera-cyan/30 hover:border-oplera-cyan/60 hover:shadow-lg hover:shadow-oplera-cyan/20 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {(feature as any).icon}
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-3 text-white">
                  {(feature as any).title}
                </h3>
                <p className="text-lg text-oplera-cyan mb-2">{(feature as any).description}</p>
                <p className="text-gray-400 text-sm">{(feature as any).benefit}</p>
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
              {implementation.sectionTitle}
              {implementation.sectionTitleHighlight && (
                <span className="text-oplera-cyan">{implementation.sectionTitleHighlight}</span>
              )}
            </h2>
            {implementation.subtitle && (
              <p className="text-gray-400 max-w-2xl mx-auto">{implementation.subtitle}</p>
            )}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {implementation.options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group bg-oplera-navy/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 relative overflow-hidden ${
                  (option as any).popular
                    ? 'border-oplera-cyan/40 hover:border-oplera-cyan hover:shadow-2xl hover:shadow-oplera-cyan/20'
                    : 'border-oplera-cyan/20 hover:border-oplera-cyan/60 hover:shadow-xl hover:shadow-oplera-cyan/10'
                }`}
              >
                {(option as any).popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-oplera-cyan/20 text-oplera-cyan text-xs font-bold rounded-full border border-oplera-cyan/50 shadow-lg shadow-oplera-cyan/20">
                      POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-300 ${
                    (option as any).popular
                      ? 'from-oplera-cyan/10 to-oplera-violet/5 opacity-0 group-hover:opacity-100'
                      : 'from-oplera-cyan/5 to-transparent opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-poppins mb-2 text-white">
                      {(option as any).title}
                    </h3>
                    <div className="text-3xl font-bold text-oplera-cyan mb-2">{(option as any).price}</div>
                    {(option as any).subtitle && (
                      <p className="text-sm text-gray-400">{(option as any).subtitle}</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {((option as any).features || []).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-oplera-cyan mr-3 text-lg mt-0.5">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {(option as any).isEnterprise ? (
                    <a
                      href={(option as any).cta?.href || '#'}
                      className="block w-full px-6 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold text-center hover:scale-105 hover:shadow-lg hover:shadow-oplera-cyan/30 transition-all"
                    >
                      {(option as any).cta?.label || 'Contact Us'}
                    </a>
                  ) : (
                    <Link
                      href={(option as any).cta?.href || '#'}
                      className="block w-full px-6 py-4 bg-oplera-cyan text-oplera-navy rounded-lg font-semibold text-center hover:scale-105 hover:shadow-lg hover:shadow-oplera-cyan/30 transition-all"
                    >
                      {(option as any).cta?.label || 'Get Started'}
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-oplera-cyan/10 via-oplera-navy to-oplera-violet/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-white">
              {(finalCTA as any).title}
              {(finalCTA as any).titleHighlight && (
                <span className="text-oplera-cyan">{(finalCTA as any).titleHighlight}</span>
              )}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">{(finalCTA as any).subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={(finalCTA as any).primaryCTA?.href || '#'}
                className="px-12 py-5 bg-oplera-cyan text-oplera-navy rounded-lg font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all"
              >
                {(finalCTA as any).primaryCTA?.label || 'Get Started'}
              </a>
              <Link
                href={(finalCTA as any).secondaryCTA?.href || '#'}
                className="px-12 py-5 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-oplera-navy transition-all"
              >
                {(finalCTA as any).secondaryCTA?.label || 'Learn More'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}