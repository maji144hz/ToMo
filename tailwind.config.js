/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 1s ease-in-out infinite',
        'twinkle': 'twinkle 2s infinite',
        'firework': 'firework 2s infinite',
        'fall': 'fall linear infinite',
        'sparkle': 'sparkle 0.8s ease-out forwards',
        'sparkle-pop': 'sparkle-pop 0.6s ease-out forwards',
      },
      keyframes: {
        glow: {
          'from': {
            'text-shadow': '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)',
          },
          'to': {
            'text-shadow': '0 0 30px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 0.8), 0 0 70px rgba(255, 255, 255, 0.6), 0 0 90px rgba(255, 255, 255, 0.4)',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        firework: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
            'box-shadow': '0 0 0 0 rgba(255, 255, 255, 0.8)',
          },
          '50%': {
            transform: 'scale(20)',
            opacity: '0.8',
            'box-shadow': '0 0 0 20px rgba(255, 255, 255, 0), 0 0 0 40px rgba(255, 215, 0, 0), 0 0 0 60px rgba(255, 100, 100, 0)',
          },
          '100%': {
            transform: 'scale(30)',
            opacity: '0',
            'box-shadow': '0 0 0 0 rgba(255, 255, 255, 0), 0 0 0 0 rgba(255, 215, 0, 0), 0 0 0 0 rgba(255, 100, 100, 0)',
          },
        },
        fall: {
          'to': {
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0',
          },
        },
        sparkle: {
          '0%': {
            transform: 'translate(0, 0) scale(0) rotate(0deg)',
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translate(var(--tx), var(--ty)) scale(1) rotate(360deg)',
            opacity: '0',
          },
        },
        'sparkle-pop': {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.2) rotate(180deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0) rotate(360deg)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

