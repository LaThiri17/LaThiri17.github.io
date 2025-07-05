import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vat-calculator/',   // Important for GitHub Pages subfolder
  plugins: [react()]
})
