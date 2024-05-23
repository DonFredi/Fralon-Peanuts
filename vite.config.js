import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/fralon-peanuts/',
  build: {
    outDir: 'build', // Specify the output directory as 'build'
  },
  server: {
    historyApiFallback: true, // Add this line to handle client-side routing
  },
});
