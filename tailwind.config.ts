import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    minWidth: {
      '3/4': '75%',
    },
    extend: {
      colors: {
        'redPink': '#ed3654',
        'zinc-850':	'#202024',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        // 'dosis': ['Dosis', 'sans-serif'],
      },
      dropShadow: {
        'normalImg': '0 35px 35px rgba(256, 256, 256, 0.99)',
        'redPinkImg': '3px 3px 100px rgba(237, 54, 84, 0.3)',
        'redPink': '3px 3px 5px rgba(237, 54, 84, 0.4)',
        'titleProject': '1px 1px 0px rgba(200, 200, 200, 0.25)',
        'buttonDrop': '1px 1px 4px rgba(200, 200, 200, 0.6)',
        'buttonDropDark': '0.5px 0.5px 4px rgba(25, 25, 25, 0.6)',
      },
      boxShadow: {
        'tecs': '4px 4px 4px rgba(89, 89, 89, 0.1)',
      },
      screens: {
        'xs': '400px',
        'xls': '330px',
      },
    },
  },
  plugins: [],
}
export default config
