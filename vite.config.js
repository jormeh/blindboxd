import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				content: './scripts/content.js', // Entry point for content script
				background: './scripts/background.js', // Entry point for background script
			},
			output: {
				entryFileNames: '[name].js', // Keep output filenames simple
			},
		},
		outDir: 'dist', // Output directory for bundled files
	},
});
