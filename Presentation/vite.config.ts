import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/dyxboard/', // Замените 'repository-name' на имя вашего репозитория
})