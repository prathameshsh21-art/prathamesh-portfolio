/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0F',
          soft: '#0E0E16',
          card: '#11111B',
        },
        primary: {
          DEFAULT: '#00D9FF',
          soft: '#22E5FF',
          dim: '#009EB8',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          soft: '#9F67FF',
          dim: '#5B21B6',
        },
        surface: '#14141F',
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Orbitron', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(0,217,255,0.35)',
        'glow-sm': '0 0 14px rgba(0,217,255,0.25)',
        'glow-purple': '0 0 30px rgba(124,58,237,0.4)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'pulse-soft': 'pulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
