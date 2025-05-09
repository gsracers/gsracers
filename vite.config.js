import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-hot-toast']
  },
  define: {
    'process.env': {} // Ensure there are no conflicts with `process.env`
  }
})
