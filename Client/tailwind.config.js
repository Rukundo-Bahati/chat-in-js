/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: 'hsl(252, 30%, 100%)',
        light: 'hsl(252, 30%, 95%)',
        gray: 'hsl(252, 15%, 65%)',
        primary: 'hsl(252, 75%, 60%)',
        secondary: 'hsl(252, 100%, 90%)',
        success: 'hsl(120, 95%, 65%)',
        danger: 'hsl(0, 95%, 65%)',
        dark: 'hsl(252, 30%, 17%)',
        black: 'hsl(252, 30%, 10%)',
      },
      borderRadius: {
        'custom': '2rem',
      },
      borderWidth: {
        'custom': '1rem',
      },
      padding: {
        'btn': '0.6rem 2rem',
        'search': '0.6rem 1rem',
        'card': '1rem',
      },
      zIndex: {
        'sticky-top-left': '5',
        'sticky-top-right': '-18',
      },
    },
  },
  plugins: [],
};
