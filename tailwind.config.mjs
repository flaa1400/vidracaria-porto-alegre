import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8', // Sky-400 (Azul Glacial)
        secondary: '#0F172A', // Slate-900 (Azul Naval/Grafite)
        accent: '#000000', // Preto puro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}
