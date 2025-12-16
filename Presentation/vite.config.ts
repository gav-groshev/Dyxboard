import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/Dyxboard/', // замените на имя вашего репозитория
  build: {
    outDir: 'dist',
    // Добавьте эту настройку для правильного размещения ресурсов
    assetsDir: 'assets',
  },
});
