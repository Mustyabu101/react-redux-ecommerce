import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

// Ensure assets are served cleanly from relative subdirectory mappings
export default defineConfig({
  plugins: [react()],
  base: './'
})
