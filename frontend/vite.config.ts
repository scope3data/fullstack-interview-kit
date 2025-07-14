import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          mui5: ['@mui/material', '@mui/icons-material'],
          dg: ['@mui/x-data-grid'],
        },
      },
    },
  },
  server: {
    open: true,
    port: process.env.PORT || 3000,
    strictPort: true,
  },
})
