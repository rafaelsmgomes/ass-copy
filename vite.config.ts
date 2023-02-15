import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/shared/mixins.scss";
        `,
      },
    },
  },
  build: {
    rollupOptions: {
      input: './index.html',
      output: {
        entryFileNames: 'assets-mm/[name].js',
        chunkFileNames: 'assets-mm/[name].js',
        assetFileNames: 'assets-mm/[name].[ext]',
      },
    },
  },
})
