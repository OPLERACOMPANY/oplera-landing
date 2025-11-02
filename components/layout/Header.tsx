'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // ===== Desktop hide/show on scroll  =====
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      if (currentScrollY < lastScrollY || currentScrollY < 100) setIsVisible(true)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) setIsVisible(false)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // ===== Lock body scroll when mobile menu open =====
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navigationItems = [
    {
      label: 'Solutions',
      href: '#solutions',
      children: [
        { label: 'Omni Support', href: '/omni-support' },
        { label: 'Orderbot', href: '/orderbot' },
        { label: 'Sales Agent', href: '/sales-agent' },
        { label: 'Voice Agent', href: '/voice-agent' },
        { label: 'CRM Assistant', href: '/crm-assistant' },
        { label: 'FAQ Assistant', href: '/faq-agent' },
      ],
    },
    { label: 'How We Work', href: '#approach' },
    { label: 'Support Plans', href: '/maintenance' },
    { label: 'Demo', href: '/demo' },
    { label: 'Contact', href: 'mailto:hello@oplera.ai' },
  ] as Array<{
    label: string
    href: string
    children?: Array<{ label: string; href: string }>
  }>

  // ===== Mobile accordion state =====
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  // Auto-scroll opened submenu into view
  useEffect(() => {
    if (!openSubmenu) return
    const id = `submenu-${openSubmenu.replace(/\s+/g, '-')}`
    document.getElementById(id)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [openSubmenu])

  const handleNavClick = (href: string) => {
    closeMenu()
    if (href.startsWith('#')) {
      document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    if (href.startsWith('mailto:') || href.startsWith('http')) { window.location.href = href; return }
    router.push(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn('fixed top-0 w-full z-[70] glassmorphism-header', isScrolled && 'scrolled')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer group pl-1">
            <img
              src="/images/oplera_21.png"
              alt="Oplera Logo"
              className="h-40 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link text-base"
                  aria-haspopup={!!item.children}
                  aria-expanded={false}
                >
                  {item.label}
                </button>

                {item.children && (
                  <div
                    className="dropdown-panel absolute left-0 mt-3 w-64 rounded-md p-2
                    opacity-0 pointer-events-none translate-y-2 transition-all duration-200
                    group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 z-50
                    bg-[#0C1F3C] ring-1 ring-white/10 shadow-2xl"
                  >
                    {item.children.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavClick(sub.href)}
                        className="w-full text-left rounded-md px-3 py-2 transition-all duration-300
                        hover:bg-white/10 hover:pl-4 hover:text-cyan-300"
                                 >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => handleNavClick('/demo')}
              className="px-6 py-2.5 rounded-md font-semibold text-sm ml-2
                         bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md
                         hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            >
              Try Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            data-mobile-menu-btn
            onClick={toggleMenu}
            className="md:hidden text-white/90 hover:text-white p-2 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu-panel"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dark overlay behind the panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black md:hidden z-[50]"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu – full-screen panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            data-mobile-menu
            id="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
              'fixed inset-0 md:hidden z-[60] isolate will-change-transform',
              'h-[100dvh] bg-[#0C1F3C] overflow-y-auto overscroll-contain'
            )
            
          }
            
          ><button
          onClick={closeMenu}
          className="fixed top-6 right-6 z-[70] bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
          aria-label="Close menu"
        >
          <X size={24} className="text-white" />
        </button>
            {/* push content below the header */}
            <div className="pt-20 px-6 pb-6">
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => {
                  const hasChildren = !!item.children?.length
                  const isExpanded = openSubmenu === item.label
                  const submenuId = `submenu-${item.label.replace(/\s+/g, '-')}`

                  return (
                    <div key={item.label} className="w-full">
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => {
                          if (hasChildren) setOpenSubmenu(isExpanded ? null : item.label)
                          else handleNavClick(item.href)
                        }}
                        className={cn(
                          'w-full text-left text-base py-3 rounded-lg transition-colors ring-1 ring-white/10',
                          isExpanded
                            ? 'bg-white/15 text-white'
                            : 'bg-white/5 text-white/90 hover:bg-white/10'
                        )}
                        aria-expanded={isExpanded}
                        aria-controls={hasChildren ? submenuId : undefined}
                      >
                        <span className="inline-flex items-center justify-between w-full">
                          {item.label}
                          {hasChildren && (
                            <motion.span
                              initial={false}
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-2 inline-block"
                              aria-hidden="true"
                            >
                              ▾
                            </motion.span>
                          )}
                        </span>
                      </button>

                      {/* Accordion Content */}
                      <AnimatePresence initial={false}>
                        {hasChildren && isExpanded && (
                          <motion.div
                            key={submenuId}
                            id={submenuId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden pl-3 rounded-lg bg-[#0F2A4D] ring-1 ring-white/10 shadow-xl"
                          >
                            <div className="flex flex-col py-2 space-y-1">
                              {item.children!.map((sub) => (
                                <button
                                  key={sub.label}
                                  onClick={() => handleNavClick(sub.href)}
                                  className="text-left w-full rounded-md px-3 py-2.5 text-sm text-white/95 hover:bg-white/10 active:bg-white/20"
                                >
                                  {sub.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}

                {/* CTA Buttons (mobile) */}
                {/* <button
                  onClick={() => handleNavClick('/demo')}
                  className="w-full mt-2 px-5 py-3 rounded-xl font-semibold shadow-xl
                             bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                             ring-1 ring-white/10 hover:brightness-110 active:scale-[.99]
                             focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                >
                  Try Demo
                </button> */}

                {/* <button
                  onClick={() => handleNavClick('#solutions')}
                  className="w-full px-5 py-3 rounded-xl font-semibold shadow-lg
                             bg-white text-[#0C1F3C]
                             ring-1 ring-white/20 hover:bg-white/95 active:scale-[.99]
                             focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Explore Solutions
                </button> */}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
