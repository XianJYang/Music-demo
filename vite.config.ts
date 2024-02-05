import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // types/node


// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue()
  ],
  //这里进行配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // @代替src
      "#": path.resolve(__dirname, "types"), // #代替types
      "comps": path.resolve(__dirname, "src/components"),
    },
  },
  server: {
    //用来配置跨域
    host: '127.0.0.1',
    open: true,
    port: 8000,
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',//目标服务器地址
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
});

