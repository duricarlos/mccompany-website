/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'mc-bg' : '#0a2463',
        // 'mc-primary' : '#FF6C22',
        // 'mc-secondary' : '#FF9209',
        // 'mc-secondary-dark' : '#231955',
        // 'mc-black' : '#130D33',
        // 'mc-white' : '#FFD099',
        // 'mc-red' : 'rgb(204, 91, 82)',
        // 'mc-text-title' : '#fffaff'

        'mc-primary' : '#0a2463',
        'mc-secondary' : '#fffaff',
        'mc-third' : '#3e92cc',
        'mc-forth' : '#d8315b',

      }
    },
    fontFamily: {
      'syne': ['Syne'],
      'sans': ['ui-sans-serif', 'system-ui']
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }
      }
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    },
  },
  plugins: [],
}

