import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acceso externo
    allowedHosts: [
      'c1a1-179-60-174-77.ngrok-free.app',  // URL de ngrok
      'localhost',                          // Localhost también puede estar permitido
    ], // Agrega la URL de ngrok aquí
  }
  
})
