/**
 * Product Page Template Types
 * 
 * Reusable data structure for all Oplera AI product pages
 */

export interface ProductHero {
  icon: string
  title: string
  titleHighlight?: string
  subtitle: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA: {
    label: string
    href: string
  }
}

export interface ProductVideo {
  sectionTitle: string
  sectionTitleHighlight?: string
  description: string
  videoSrc: string // Cloudflare Stream / Vimeo / Mux URL
  placeholderText?: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA: {
    label: string
    href: string
  }
}

export interface ProductFeature {
  icon: string
  title: string
  description: string
  benefit: string
}

export interface ImplementationOption {
  title: string
  subtitle?: string
  price: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  popular?: boolean
  isEnterprise?: boolean
}

export interface FlowStep {
  label: string
  icon: string
}

export interface ProductTestimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface FinalCTA {
  title: string
  titleHighlight?: string
  subtitle: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA: {
    label: string
    href: string
  }
}

export interface ProductPageData {
  hero: ProductHero
  video: ProductVideo
  features: {
    sectionTitle: string
    sectionTitleHighlight?: string
    items: ProductFeature[]
  }
  implementation: {
    sectionTitle: string
    sectionTitleHighlight?: string
    subtitle?: string
    options: ImplementationOption[]
  }
  flow?: {
    sectionTitle: string
    sectionTitleHighlight?: string
    steps: FlowStep[]
  }
  testimonials?: {
    sectionTitle: string
    sectionTitleHighlight?: string
    items: ProductTestimonial[]
  }
  finalCTA: FinalCTA
}

