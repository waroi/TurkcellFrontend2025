import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Daha iyi sıkıştırma için 'terser' kullan
    terserOptions: {
      compress: {
        drop_console: true, // Konsol loglarını kaldırır
        drop_debugger: true,
      },
      format: {
        comments: false, // Yorumları kaldır
      },
    },
  },
})

