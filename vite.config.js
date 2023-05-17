import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [reactRefresh(), tailwindcss(), react()],
});
