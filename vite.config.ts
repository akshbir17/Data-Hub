import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages, set base to '/repo-name/'
  // For Vercel/Netlify/Cloudflare, '/' is usually fine.
  base: './',
  server: {
    port: 3000,
  },
});