import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJs(),
  ],
  resolve: {
    alias: {
      '@util/script': resolve(__dirname, 'vendor/util-script.ts'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'XiuxianWorld',
      formats: ['iife'],
      fileName: () => 'xiuxian-world.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
