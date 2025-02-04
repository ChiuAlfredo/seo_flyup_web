import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicPath: '/seo_flyup_web/',  // Add public path for GitHub Pages
  build: {
    outDir: 'dist',  // 指定輸出目錄
    emptyOutDir: true,  // 構建前清空輸出目錄
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})
