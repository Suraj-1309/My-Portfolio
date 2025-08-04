import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // or '/' depending on where you're hosting
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // <- important
  }
})
