import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/portfolio-german/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})