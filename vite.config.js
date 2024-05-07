import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const base = process.env.NODE_ENV === 'production' ? '/fralon-peanuts/' : '/';

export default defineConfig({
  base: base,
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory as 'build'
  },
});
