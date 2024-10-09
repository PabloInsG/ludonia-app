import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:  {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cuidados: resolve(__dirname, 'cuidados.html'),
        maria_pazos: resolve(__dirname, 'maria-pazos.html'),
        trabajos: resolve(__dirname, 'trabajos.html'),
        laboratorio: resolve(__dirname, 'laboratorio.html'),
      }
    }
  }
})
