import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: '/coldbydefault.github.io/',
  server: {
    host: '0.0.0.0', 
    port: 5173,      
  },
  build: {
    sourcemap: false, 
  },
});
