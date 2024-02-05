
import { createRouter, createWebHistory,RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name:'login',
    component: () => import("@/pages/login/login.vue"),//路由懒加载
  },
  {
      path: "/home",
      component: () => import("@/pages/home/home.vue"),  
      // children:[
      //   {
      //     path:'Songlist', // 子页面1
      //     component:() => import("@/pages/home/home.vue"),  
      //   },
      // ]
  },
  ];
  const router = createRouter({
    history: createWebHistory(), //可传参数，配置base路径，例如'/app'
    routes,
    linkActiveClass: 'is-active'
  });
  
  export default router;
  