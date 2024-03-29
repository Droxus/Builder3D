import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['react-refresh'],
  },
  base: '/Builder3D/',
  build: {
    outDir: './docs',
    target: 'esnext',
  },

  plugins: [react({
    include: "**/*.tsx",
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
