import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          ['@babel/preset-env', {
            targets: 'ios 10.3',
            useBuiltIns: 'usage',
            corejs: 3
          }]
        ]
      }
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://trigger.esp8266-server.de',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome49',
    minify: 'terser',
    terserOptions: {
      safari10: true
    }
  }
})
