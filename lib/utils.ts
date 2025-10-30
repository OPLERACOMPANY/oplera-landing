import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: string, period: string, isYearly: boolean = false): string {
  if (price === 'Custom') return price
  
  const numericPrice = parseInt(price.replace('$', ''))
  const yearlyPrice = isYearly ? Math.round(numericPrice * 10) : numericPrice
  const displayPrice = isYearly ? yearlyPrice : numericPrice
  
  return `$${displayPrice}${period}`
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId.replace('#', ''))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}