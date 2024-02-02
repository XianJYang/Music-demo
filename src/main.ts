import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";
import store from "./store/index"
import './index.css'
import {componentPligin} from "@/components/index"
createApp(App).use(router).use(store).use(componentPligin).mount('#app')
