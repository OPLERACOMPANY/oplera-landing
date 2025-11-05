import { Testimonial, NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How We Work', href: '#approach' },
  { label: 'Demo', href: '/demo' },
  { label: 'Contact', href: 'mailto:hello@oplera.ai' },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      "Oplera built a custom AI automation that perfectly matched our internal workflow. We've cut manual tasks by over 70%, and now our team focuses entirely on growth and strategy.",
    author: {
      name: 'Sara Al-Khatib',
      role: 'CTO',
      company: 'TechFlow MENA',
      initials: 'SA',
    },
  },
  {
    id: '2',
    quote:
      "What impressed us most is how Oplera designed smart agents tailored for our business. The automation handles complex workflows smoothly and with exceptional accuracy.",
    author: {
      name: 'Marwan Al-Assaf',
      role: 'Head of Engineering',
      company: 'DataVault Jordan',
      initials: 'MA',
    },
  },
  {
    id: '3',
    quote:
      "Oplera became more than a vendor—they became our automation partner. Their expertise in AI integration reshaped how our organization operates every single day.",
    author: {
      name: 'Dr. Leila Hassan',
      role: 'AI Research Lead',
      company: 'InnovateLab',
      initials: 'LH',
    },
  },
  {
    id: '4',
    quote:
      "Working with Oplera transformed how OrigamiSoft operates. Their AI automation cut our support handling time by more than half and made our customer interactions far more efficient.",
    author: {
      name: 'Omar Haddad',
      role: 'Operations Manager',
      company: 'OrigamiSoft',
      initials: 'OH',
    },
  },
]
