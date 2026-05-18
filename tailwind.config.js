/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimaryLight: '#F7F5F2',
        bgPrimaryDark: '#1A1D1E',
        bgIntervention: '#232B2F',
        textPrimaryLight: '#2B2D2F',
        textSecondaryLight: '#6B7276',
        textPrimaryDark: '#EAEBEB',
        textSecondaryDark: '#A0A6A9',
        textIntervention: '#F7F5F2',
        accentPrimary: '#748670',
        actionDestructive: '#8E4A49',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
