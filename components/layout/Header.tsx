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
    { label: 'Solutions', href: '#solutions' },
    { label: 'How We Work', href: '#approach' },
    { label: 'Support Plans', href: '/maintenance' },
    { label: 'Demo', href: '/demo' },
    { label: 'Contact', href: 'mailto:hello@oplera.ai' },
  ]

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
        <div className="flex justify-between items-center h-20">
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
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-base"
              >
                {item.label}
              </button>
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

      {/* Mobile Menu */
      }
      <motion.div
        data-mobile-menu
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-20 bottom-0 z-50 bg-oplera-dark/95 backdrop-blur border-t border-white/10 p-6',
          'md:hidden'
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-white/90 hover:text-white transition-all text-left text-base"
            >
              {item.label}
            </button>
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
