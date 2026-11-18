import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

const raiz = import.meta.dirname

// Sitio de varias páginas: cada .html de la raíz es una entrada.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(raiz, 'index.html'),
        plataforma: resolve(raiz, 'plataforma.html'),
        taller: resolve(raiz, 'taller-de-pipas.html'),
        productos: resolve(raiz, 'productos.html'),
        contacto: resolve(raiz, 'contacto.html'),
        secuenciador: resolve(raiz, 'secuenciador.html'),
      },
    },
  },
})
