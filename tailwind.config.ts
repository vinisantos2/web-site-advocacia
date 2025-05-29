import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './**/*.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Azul escuro (profissional)
        secondary: '#e2e8f0', // Cinza claro
        accent: '#1d4ed8', // Azul vibrante para detalhes
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        spacing: 'margin, padding',
      },

      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        zoom: 'zoom 10s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins:  [require("tailwindcss-animate")],
  darkMode: 'class', // ou 'media' se preferir
}
export default config
