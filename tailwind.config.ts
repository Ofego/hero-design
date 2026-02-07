import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2557EC',
        'brand-yellow': '#F7D051',
        'dark-bg': '#0a0a0f',
        'dark-surface': '#0f0f14',
      },
    },
  },
  plugins: [],
}
export default config
