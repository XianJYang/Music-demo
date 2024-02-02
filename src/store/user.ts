import { defineStore } from 'pinia';

// 第一个参数是应用程序中 store 的唯一 id ,Pinia 使用它来将 store 连接到 devtool
export const useStoreUser = defineStore('user', {
    // 数仓
    state:()=>{
        return {
            userInfo: {
              name: 'zhangsan',
              age: 23,
            },
            token: 'S1',
          };
    },
    // 计算属性
    getters: {
       newName: (state) => state.userInfo.name + 'vip',
       double: (state) => state.userInfo.age * 2,
     },
     // 改变值的方法，支持同步和异步
     actions: {
        //更新整个对象
        updateUserInfo(userInfo: { name: string; age: number }) {
          this.userInfo = userInfo;
        },
        //更新对象中某个属性
        updateAge(age: number) {
          this.userInfo.age = age;
        },
        //更新基础数据类型
        updateToken(token: string) {
          this.token = token;
        },
      },
   })