/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        card: 'var(--color-card)',
        heading: 'var(--color-heading)',
        body: 'var(--color-body)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        primary: '#0ea5e9',       
        'primary-hover': '#0284c7',
        'primary-light': '#e0f2fe',
        accent: '#a855f7',        
        'accent-hover': '#9333ea',
      },
      animation: {
        'wave': 'wave 1.4s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%, 60%, 100%': { transform: 'translateY(0) scale(0.8)', opacity: '0.4' },
          '30%': { transform: 'translateY(-8px) scale(1.15)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(5px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}
