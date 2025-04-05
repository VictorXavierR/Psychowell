// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Psychowell/', // 👈 muy importante para GitHub Pages
  plugins: [react()]
})