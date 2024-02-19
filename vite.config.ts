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
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://m.maoyan.com/ajax/movieOnInfoList',//目标服务器地址
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
});

