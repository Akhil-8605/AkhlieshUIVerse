const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const cssInjectedByJsPlugin = require('vite-plugin-css-injected-by-js').default;
const path = require('path');

module.exports = defineConfig({
  publicDir: false,
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.js'),
      name: 'AkhileshUIVerse',
      fileName: (format) =>
        format === 'es' ? 'akhilesh-ui-verse.js' : 'akhilesh-ui-verse.cjs',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
