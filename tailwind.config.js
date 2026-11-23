/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#FAFCFA',
        mist: '#F3F7F4',
        ink: '#101814',
        brand: {
          50: '#F0FAF5',
          100: '#DDF3E8',
          200: '#BBE7D2',
          300: '#86D3B0',
          500: '#16A36A', // main accent
          600: '#0D8453', // AA-contrast on white for text & buttons
          700: '#0A6B43',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,20,.04), 0 14px 36px -14px rgba(16,70,45,.16)',
        lift: '0 2px 4px rgba(16,24,20,.04), 0 22px 44px -16px rgba(16,70,45,.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'line-in': {
          '0%': { opacity: '0', transform: 'translateX(-6px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      animation: {
        'fade-up': 'fade-up .8s cubic-bezier(.2,.7,.2,1) both',
        'line-in': 'line-in .5s ease-out both',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
