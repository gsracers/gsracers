import { DragControls } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradienthero: {
          "0%": {backgroundPosition: "0% 50% " },
          "100%": { backgroundPosition: "100% 50%" },
          },
        },
        animation:{
          gradienthero: "gradienthero 5s linear infinite"
        },

        fontFamily: {
          trinos: ["trinossolid", "sans-serif"],
          draco: ["draco" ,"sans-serif" ],
          proracing: ["proracing" ,"sans-serif" ]


        },  
      },
      plugins: [],
    }
  }

