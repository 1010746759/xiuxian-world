import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import autoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJs(),
    autoImport({
      imports: ['vue', 'pinia'],
      dts: false,
    }),
  ],
  resolve: {
    alias: {
      '@util/script': resolve(__dirname, 'vendor/util-script.ts'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['es'],
      fileName: () => 'xiuxian-world.js',
    },
    rollupOptions: {
      external: ['vue', 'pinia', 'zod'],
      output: {
        paths: {
          vue: 'https://testingcf.jsdelivr.net/npm/vue@3.4.0/dist/vue.esm-browser.js',
          pinia: 'https://testingcf.jsdelivr.net/npm/pinia@2.1.7/+esm',
          zod: 'https://testingcf.jsdelivr.net/npm/zod@3.22.0/+esm',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
