import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import html from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    vue(),
    html({
      minify: true
    })
  ],
  base: '.',
  server: {
    host: '0.0.0.0',
    port: 80
  },
  build: {
    sourcemap: false,
    cssCodeSplit: false
  }
  // },
  // publicDir: '/'
})

