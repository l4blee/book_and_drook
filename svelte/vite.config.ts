import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port: 3000,
		proxy: {
			'/auth/logout': 'http://localhost:5001',
			'/api/get_libraries': 'http://localhost:5001',
			'/auth/register': 'http://localhost:5001',
			'/auth/login': 'http://localhost:5001',
		}
	}
};

export default config;
