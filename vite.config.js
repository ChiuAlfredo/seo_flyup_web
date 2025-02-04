import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/seo_flyup_web/'
    : '/',
  build: {
    outDir: 'dist',  // 指定輸出目錄
    emptyOutDir: true,  // 構建前清空輸出目錄
  },
})
