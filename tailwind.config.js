/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }
  
        'desktop': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }
  
        'laptop': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }
  
        'tablet': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }
  
        'mobile': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
