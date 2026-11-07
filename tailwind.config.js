/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        registrar: {
          blue: {
            DEFAULT: '#1A56DB',
            dark: '#1344AF',
            light: '#EBF2FF',
            subtle: '#F0F5FF'
          },
          green: {
            DEFAULT: '#0D5332',
            dark: '#083B23',
            light: '#EAF7EE',
            badge: '#137343'
          },
          cream: {
            DEFAULT: '#FBF9F5',
            paper: '#F5F0E6',
            card: '#FFFFFF'
          },
          amber: {
            DEFAULT: '#D97706',
            dark: '#B45309',
            light: '#FEF3C7'
          },
          ink: {
            DEFAULT: '#1E293B',
            muted: '#475569',
            faint: '#94A3B8',
            border: '#E2E8F0',
            borderDossier: '#CBD5E1'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'dossier': '0 1px 3px rgba(15, 23, 42, 0.08), 0 8px 24px -4px rgba(15, 23, 42, 0.06)',
        'dossier-hover': '0 4px 6px rgba(15, 23, 42, 0.08), 0 16px 32px -4px rgba(15, 23, 42, 0.10)',
        'seal': '0 2px 8px rgba(13, 83, 50, 0.15)'
      }
    },
  },
  plugins: [],
}
