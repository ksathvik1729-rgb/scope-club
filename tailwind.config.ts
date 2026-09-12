/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#0f0f0f',
          800: '#141414',
          700: '#1c1c1c',
          600: '#262626',
          500: '#3a3a3a',
          400: '#555555',
          300: '#777777',
          200: '#aaaaaa',
          100: '#cccccc',
          50: '#e8e8e8',
          25: '#f4f4f4',
        },
        // Legacy compat
        'scope-bg':     '#050505',
        'scope-panel':  '#0a0a0a',
        'scope-ink':    '#e8e8e8',
        'scope-muted':  '#777777',
        'scope-accent': '#e8e8e8',
        'scope-border': 'rgba(255,255,255,0.08)',
      },
      letterSpacing: {
        'ultra-tight': '-0.05em',
        tight: '-0.02em',
        wide2: '0.08em',
        'ultra-wide': '0.2em',
        'mega-wide': '0.35em',
      },
      animation: {
        'fade-up':       'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':       'fadeIn 1.2s ease forwards',
        'scale-in':      'scaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee':       'marquee 40s linear infinite',
        'marquee-slow':  'marquee 60s linear infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'spin-slow':     'spin 20s linear infinite',
        'pulse-soft':    'pulseSoft 3s ease-in-out infinite',
        'blink':         'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp:        { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:        { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        scaleIn:       { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        marquee:       { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        scrollBounce:  { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(10px)' } },
        pulseSoft:     { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '1' } },
        blink:         { '0%, 50%': { opacity: '1' }, '51%, 100%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
};
