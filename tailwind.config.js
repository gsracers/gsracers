import { DragControls } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			gradienthero: {
  				'0%': {
  					backgroundPosition: '0% 50% '
  				},
  				'100%': {
  					backgroundPosition: '100% 50%'
  				}
  			}
  		},
  		animation: {
  			gradienthero: 'gradienthero 5s linear infinite'
  		},
  		fontFamily: {
  			trinos: ["trinossolid", "sans-serif"],
  			draco: ["draco" ,"sans-serif" ],
  			proracing: ["proracing" ,"sans-serif" ],
			santos: ["santos" ,"sans-serif" ],
			kehlani: ["kehlani" ,"sans-serif" ]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	},
  	plugins: []
  },
    plugins: [require("tailwindcss-animate")]
}

