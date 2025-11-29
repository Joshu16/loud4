import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Minificar CSS
    cssMinify: true,
    // Minificar JavaScript con Terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Funciones puras a eliminar
      },
    },
    rollupOptions: {
      output: {
        // Code splitting manual para mejor caching
        manualChunks: (id) => {
          // Separar vendor chunks por librería
          if (id.includes('node_modules')) {
            // React core (cambia poco)
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            // Router (cambia poco)
            if (id.includes('react-router')) {
              return 'router-vendor'
            }
            // Animaciones (pesado, cargar solo cuando se necesite)
            if (id.includes('framer-motion')) {
              return 'animation-vendor'
            }
            // Iconos (puede ser grande)
            if (id.includes('lucide-react')) {
              return 'icons-vendor'
            }
            // Swiper (carousel)
            if (id.includes('swiper')) {
              return 'swiper-vendor'
            }
            // Otros vendors
            return 'vendor'
          }
        },
        // Nombres de archivos con hash para cache busting
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Límite de advertencia de tamaño de chunk (en KB)
    chunkSizeWarningLimit: 1000,
    // Generar source maps solo en desarrollo
    sourcemap: false, // true solo para debugging
  },
  // Optimizar dependencias pre-bundle
  optimizeDeps: {
    // Incluir dependencias que se usan frecuentemente
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'swiper'
    ],
  },
})
