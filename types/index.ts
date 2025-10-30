export interface Testimonial {
  id: string
  quote: string
  author: {
    name: string
    role: string
    company: string
    initials: string
  }
}

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}
