import path from 'path'
import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    React(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => {
        if (format === 'cjs') {
          return 'headlessui-float.cjs'
        }
        return 'headlessui-float.mjs'
      },
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@headlessui/react',
        '@floating-ui/core',
        '@floating-ui/dom',
        '@floating-ui/react-dom',
      ],
    },
  },
})
