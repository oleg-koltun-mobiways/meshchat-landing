import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const API_URL = `${env.VITE_API_BASE_URL ?? 'http://localhost:3000'}`;

  return {
    define: {
      'process.env': process.env
    },
    plugins: [react(), TanStackRouterVite()],
    assetsInclude: ['**/*.gif'],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // Use modern Sass API instead of legacy
        }
      }
    }
  }
})
