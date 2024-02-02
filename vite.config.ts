import { defineConfig,loadEnv  } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // types/node

// https://vitejs.dev/config/

export default ({ mode }) => {
  console.log('mode', loadEnv(mode, process.cwd()).VITE_BASE_URL);   //127.0.0.1:9000/api  
  return defineConfig({
    plugins: [vue()],
    //这里进行配置别名
    resolve: {
      alias: {
        "@": path.resolve("./src"), // @代替src
        "#": path.resolve("./types"), // #代替types
      },
    },
  });
};

