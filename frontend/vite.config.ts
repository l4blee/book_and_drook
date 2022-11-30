import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    proxy: {
      '/api/get_data': 'http://localhost:5000'
    }
  },
  build: {
    target: 'esnext',
  },
});
