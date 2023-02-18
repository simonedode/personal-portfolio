import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
