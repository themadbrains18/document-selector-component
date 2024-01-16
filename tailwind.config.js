/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        'gray-900': '#111928',
        'gray-800': '#1F2A37',
        'gray-600': '#4B5563',
        'gray-400': '#9CA3AF',
        'gray-300': '#D1D5DB',
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'orange-500': '#FF5A1F',
        'green-500': '#0E9F6E',
        'blue-500': '#3F83F8',
        'blue-100': '#E1EFFE',
        'blue-200': '#C3DDFD',
        'blue-50': '#EBF5FF',
        'green-500': '#0E9F6E',
        'primary-800':'#1E429F',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

