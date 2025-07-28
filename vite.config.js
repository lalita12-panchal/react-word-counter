// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-word-counter/',  // 🔥 Add this line
  plugins: [react()],
});
