import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({
      include: ['src'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'src/vite-env.d.ts'],
      outDir: 'dist/types',
      rollupTypes: true,
      staticImport: true,
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'plurabot',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'recoil', 'react-markdown', 'react-syntax-highlighter', 'uuid'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          recoil: 'Recoil',
          'react-markdown': 'ReactMarkdown',
          'react-syntax-highlighter': 'ReactSyntaxHighlighter',
          uuid: 'uuid',
        },
      },
    },
  },
});