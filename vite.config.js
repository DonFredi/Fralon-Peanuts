import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  base: "/fralon-peanuts/",
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory as 'build'
  },
});
