import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 解决跨域问题
  server: {
    host: 'localhost',
    // 随便设置一个冷门port，避免和api服务器上运行的vue项目port冲突
    port: 8000,
    // https: false,
    // open: false,
    proxy: {
      '/api1': {
        // 实际请求地址
        target: 'http://mobilecdn.kugou.com',
        // 是否允许跨域，在本地会创建一个虚拟的服务器
        // 然后发送请求数据
        changeOrigin: true,
        ws: false,
        rewrite: path => path.replace(/^\/api1/, '')
      },
      '/api2': {
        // 实际请求地址
        target: 'http://m.kugou.com',
        // 是否允许跨域，在本地会创建一个虚拟的服务器
        // 然后发送请求数据
        changeOrigin: true,
        ws: false,
        rewrite: path => path.replace(/^\/api2/, '')
      }
    }
  }
})
