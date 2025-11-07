import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true
})
const poppins = Poppins({ 
  weight: ['700'], 
  subsets: ['latin'], 
  variable: '--font-poppins',
  display: 'swap',
  preload: true
})


export const metadata: Metadata = {
  title: 'OPLERA — The Era of Smarter Operations',
  description:
    'AI-driven orchestration to make your business faster, smarter, and scalable. Enterprise-grade AI platform with agent orchestration, RAG memory, and secure workflows.',
  keywords: ['AI', 'automation', 'enterprise', 'orchestration', 'agents', 'workflows'],
  authors: [{ name: 'OPLERA' }],
  creator: 'OPLERA',
  publisher: 'OPLERA',
}

// 👇 هذول لازم يكونوا Export منفصلين عن metadata
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A1B3D',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/public/brand/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} gradient-bg text-white overflow-x-hidden font-inter`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
