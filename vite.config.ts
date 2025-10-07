import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['ios >= 10.3'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true
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
    cssTarget: 'chrome49'
  }
})
