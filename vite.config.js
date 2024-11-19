import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: '/coldbydefault.github.io/',
  server: {
    host: '0.0.0.0', // Bind to all available interfaces
    port: 5173,      // Optional: specify a custom port
  },
});
