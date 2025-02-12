import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteSSG } from 'vite-ssg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:  process.env.NODE_ENV === 'production' 
  ? '/seo_flyup_web/'
  : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      preload: 'js'
    }
  }
})
