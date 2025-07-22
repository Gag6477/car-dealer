import { defineConfig, resolveConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData:
          `@use "@/styles/variables" as *\n`+
          `@use "@/styles/mixins" as *\n`+
          `@use "@/styles/functions" as *\n`,
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
