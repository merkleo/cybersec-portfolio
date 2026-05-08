import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambia 'cybersec-portfolio' por el nombre exacto de tu repo en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/cybersec-portfolio/',
})
