import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Important: Use '/' for Vercel deployments
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  }
});
