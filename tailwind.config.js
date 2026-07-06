/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#d9e3f5',
          200: '#b3c7eb',
          300: '#8daae0',
          400: '#678ed6',
          500: '#4172cb',
          600: '#2a58b0',
          700: '#1d4080',
          800: '#122850',
          900: '#0a1628',
          950: '#060d1a',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':        'fadeIn 0.6s ease-out both',
        'slide-up':       'slideUp 0.65s cubic-bezier(0.16,1,0.3,1) both',
        'slide-up-sm':    'slideUpSm 0.55s cubic-bezier(0.16,1,0.3,1) both',
        'slide-left':     'slideLeft 0.65s cubic-bezier(0.16,1,0.3,1) both',
        'slide-right':    'slideRight 0.65s cubic-bezier(0.16,1,0.3,1) both',
        'scale-in':       'scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
        'scale-in-sm':    'scaleInSm 0.45s cubic-bezier(0.34,1.56,0.64,1) both',
        'page-enter':     'pageEnter 0.45s cubic-bezier(0.16,1,0.3,1) both',
        'shimmer':        'shimmer 2s linear infinite',
        'float':          'float 3s ease-in-out infinite',
        'pulse-gold':     'pulseGold 2s ease-in-out infinite',
        'draw-line':      'drawLine 0.8s ease-out both',
        'count-in':       'countIn 0.4s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpSm: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleInSm: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pageEnter: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(245,158,11,0.4)' },
          '50%':     { boxShadow: '0 0 0 12px rgba(245,158,11,0)' },
        },
        drawLine: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        countIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

