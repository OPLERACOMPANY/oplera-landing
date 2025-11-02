'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
// Temporarily disabled - will re-enable for bilingual support later
// import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  // Scroll detection for transparency and hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 20)
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

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

  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const handleNavClick = (href: string) => {
    closeMenu()
    
    if (href.startsWith('#')) {
      // Smooth scroll for hash links
      const element = document.getElementById(href.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href.startsWith('mailto:') || href.startsWith('http')) {
      // Open external links
      window.location.href = href
    } else {
      // Navigate to internal routes
      router.push(href)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        "fixed top-0 w-full z-50 glassmorphism-header",
        isScrolled && "scrolled"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 z-[60] relative">
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
                  <div className="dropdown-panel absolute left-0 mt-3 w-64 rounded-md p-2 opacity-0 pointer-events-none translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 z-50">
                    {item.children.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavClick(sub.href)}
                        className="submenu-link w-full text-left rounded-md px-3 py-2"
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
              className="cta-button px-6 py-2.5 rounded-md font-semibold text-sm ml-2"
            >
              Try Demo
            </button>
            {/* Temporarily disabled - English only for now */}
            {/* <LanguageSwitcher /> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            data-mobile-menu-btn
            onClick={toggleMenu}
            className="md:hidden text-white/90 hover:text-white p-2 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay for mobile menu */}
      {isOpen && (
        <div className={cn(
          'fixed inset-x-0 top-20 bottom-0 bg-black/60 z-40 md:hidden'
        )} />
      )}

      {/* Mobile Menu */}
      <motion.div
        data-mobile-menu
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-20 bottom-0 z-50 bg-oplera-dark backdrop-blur border-t border-white/10 p-6 overflow-y-auto',
          'md:hidden'
        )}
      >
        <nav className="flex flex-col space-y-2">
          {navigationItems.map((item) => (
            <div key={item.label} className="w-full">
              <button
                onClick={() => {
                  if (item.children) {
                    setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                  } else {
                    handleNavClick(item.href)
                  }
                }}
                className="text-white/90 hover:text-white transition-all text-left text-base w-full py-3"
                aria-expanded={openSubmenu === item.label}
                aria-controls={`submenu-${item.label}`}
              >
                {item.label}
              </button>
              {item.children && (
                <div
                  id={`submenu-${item.label}`}
                  className={cn(
                    'pl-3 border-l border-white/10 transition-all duration-200 rounded-md',
                    openSubmenu === item.label 
                      ? 'max-h-[1000px] opacity-100 bg-oplera-dark overflow-visible' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  )}
                >
                  <div className="flex flex-col py-2 space-y-1">
                    {item.children.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavClick(sub.href)}
                        className="submenu-link text-left w-full rounded-md px-3 py-2.5 text-sm"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => handleNavClick('/demo')}
            className="cta-button w-full px-6 py-3 rounded-md font-semibold"
          >
            Try Demo
          </button>
          {/* Temporarily disabled - English only for now */}
          {/* <div className="pt-4 border-t border-oplera-cyan/20">
            <LanguageSwitcher />
          </div> */}
        </nav>
      </motion.div>
    </motion.header>
  )
}
