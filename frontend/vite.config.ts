import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api/get_user_data': 'http://localhost:5001',
      '/api/get_libraries': 'http://localhost:5001',
      '/api/get_playbill': 'http://localhost:5001',
      '/static': 'http://localhost:5001',
      '/auth/register': 'http://localhost:5001',
      '/auth/login': 'http://localhost:5001',
      '/auth/logout': 'http://localhost:5001'
    }
  },
  build: {
    target: 'esnext',
  },
});
