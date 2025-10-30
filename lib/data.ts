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
    quote: "Oplera built us a custom AI system that understands our unique workflow. We've reduced manual work by 70% and our team can now focus on strategic initiatives that drive real value.",
    author: {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow',
      initials: 'SC',
    },
  },
  {
    id: '2',
    quote: 'Unlike template solutions, Oplera designed intelligent agents specifically for our needs. The custom automation handles complex workflows with precision we never thought possible.',
    author: {
      name: 'Marcus Rodriguez',
      role: 'Head of Engineering',
      company: 'DataVault',
      initials: 'MR',
    },
  },
  {
    id: '3',
    quote: "Oplera didn't just implement a tool—they became our automation partner. Their custom approach to AI integration transformed how our entire organization operates.",
    author: {
      name: 'Dr. Lisa Park',
      role: 'AI Research Lead',
      company: 'InnovateLab',
      initials: 'LP',
    },
  },
]
