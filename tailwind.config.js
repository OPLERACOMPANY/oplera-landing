/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        cairo: ['var(--font-cairo)', 'Cairo', 'sans-serif'],
      },
      colors: {
        'oplera-navy': '#0A1B3D',
        'oplera-cyan': '#00D1D1',
        'oplera-violet': '#7A5AF8',
        'oplera-purple': '#7A5AF8',
        'oplera-dark': '#0A1B3D',
        'oplera-darker': '#051122',
        // New Oplera branding colors
        'oplera-blue': '#0C1F3C',
        'oplera-text': '#E4E9EE',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #00D1D1' },
          '100%': { boxShadow: '0 0 40px #00D1D1, 0 0 60px #00D1D1' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00D1D1' },
        },
        'fade-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}