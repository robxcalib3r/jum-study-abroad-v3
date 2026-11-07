import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || (process.env.NODE_ENV === 'production' ? '/jum-study-abroad-v3/' : '/'),
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
});
