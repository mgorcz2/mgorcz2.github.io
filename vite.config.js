import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites under /<repo>/.
  // Using a relative base avoids having to hardcode the repo name.
  base: './',
  plugins: [react()],
})
