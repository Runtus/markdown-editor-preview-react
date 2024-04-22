import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => ({
  plugins: [react(), viteMockServe({
    mockPath: "./mock",
    enable: command === "serve" && mode === "mock"
  })
],
  css: {
    preprocessorOptions: {

    }
  }
}))
