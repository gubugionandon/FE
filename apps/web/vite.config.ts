import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, '../../packages/ui/src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  optimizeDeps: {
    force: true, // 의존성 캐시 강제 재빌드
    include: ['zustand', 'react-hook-form', '@hookform/resolvers'],
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
