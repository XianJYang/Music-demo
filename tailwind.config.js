/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 自定义模糊
      blur: {
        ts: '2px',
      }, 
      zIndex: {
        max: '9999',
      }
    },

    // 自定义颜色调色板
    colors:{
      transparent:'transparent'
    }
  },
  // 移出未使用的css类
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // 第三方
  plugins: [require("daisyui")],
}

