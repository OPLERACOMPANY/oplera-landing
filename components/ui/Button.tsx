import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-oplera-cyan focus:ring-offset-2 focus:ring-offset-oplera-navy disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-oplera-cyan text-oplera-navy hover:bg-oplera-cyan/80 hover:shadow-lg hover:shadow-oplera-cyan/50 transform hover:scale-105 animate-glow',
      secondary: 'bg-oplera-violet text-white hover:bg-oplera-violet/80 hover:shadow-lg hover:shadow-oplera-violet/50 transform hover:scale-105',
      outline: 'border-2 border-oplera-cyan text-oplera-cyan hover:bg-oplera-cyan hover:text-oplera-navy transition-all duration-300',
      ghost: 'text-gray-300 hover:text-oplera-cyan hover:bg-oplera-cyan/10 transition-colors duration-300',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }