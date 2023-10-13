import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        'redPink': '#ed3654',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      vh: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      dropShadow: {
        'normalImg': '0 35px 35px rgba(160, 160, 160, 0.4)',
        'redPinkImg': '0 40px 40px rgba(237, 54, 84, 0.5)',
        'redPink': '3px 3px 5px rgba(237, 54, 84, 0.6)',
        'linkedIn': '4px 4px 7px rgba(54, 194, 237, 0.6)',
        'gitHub': '4px 4px 7px rgba(38, 38, 38, 0.6)',
        'gitHub2': '4px 4px 7px rgba(89, 89, 89, 0.6)',
      },
      screens: {
        'xs': '380px',
      },
    },
  },
  plugins: [],
}
export default config
