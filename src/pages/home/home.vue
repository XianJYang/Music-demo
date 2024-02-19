<template>
  <div class="flex flex-row bg-slate-50 rounded-2xl shadow-lg  h-full  overflow-hidden">
    <!-- left -->
    <div
      class="w-2/12 min-w-40 ackdrop-blur-xl  rounded-l-2xl  _backGColor shadow-inner flex flex-col  justify-items-center items-center">
      <!-- logo -->
      <div class="w-full mb-6">
        <div class="flex flex-row justify-around items-center p-4 text-sm text-slate-200 rounded-xl w-full h-24">
          <img class="_logoImg" src="../../assets/icon/xingqiu.png" alt="">
          <div class="ml-4 text-sm font-black tracking-widest">Galaxy Music</div>
        </div>
      </div>
      <!-- admin -->
      <div class="flex flex-col mb-8">
        <div class="avatar online transition hover:scale-125 duration-500 ease-in-out cursor-pointer"
          @click="updateactor()">
          <div class="w-16 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div class="flex flex-row justify-around items-center my-2"><img src="../../assets/icon/dingwei.png" class="w-6"
            alt=""><span class="text-sm">天津</span></div>
        <!-- <div class="avatar offline">
          <div class="w-14 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div> -->
      </div>
      <!-- Menu -->
      <div
        class="flex flex-col  justify-items-center items-center rounded-xl cursor-pointer duration-300 ease-in-out bg-color mt-2 mb-4"
        v-for="(item, index) in MenuList" :key="index" :class="[item.checked ? 'check-bg' : '']"
        @click="ChangeBtn(item,index)">
        <div class="flex flex-row justify-items-center items-center max-h-12 my-3 mx-4 text-sm text-slate-200">
          <img class="svg" :class="[item.checked ? 'grayscale-0' : 'grayscale']" :src="item.iconImg" />
          <div class="mx-4 text-sm" :class="[item.checked ? 'text-neutral-950 font-black' : 'text-neutral-400']">{{
            item.title
          }}</div>
        </div>
      </div>

      <!-- Function button -->

      <div class="flex flex-row justify-items-center justify-between w-10/12 rounded-xl p-3 m-3 bg-color-button">
        <img :src="item.iconImg" v-for="(item, index) in _bottomIcon" :key="index"  class="_logoImg cursor-pointer" alt="" srcset=""
          @click="changeComponents(item)">
      </div>

    </div>

    <!-- right -->
    <div class="w-10/12 rounded-r-2xl _backBColor">
      <KeepAlive>
        <component :is="currentTab"></component>
      </KeepAlive>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref,shallowRef } from 'vue'
import RecommendedSings from '../../components/RecommendedSings/RecommendedSing.vue'   // 导入子组件
import ChartStatistics from '../../components/ChartStatistics/ChartStatistics.vue'   // 导入子组件
import PlanetaryRoaming from '../../components/PlanetaryRoaming/PlanetaryRoaming.vue'   // 导入子组件
import myMusic from '../../components/myMusic/myMusic.vue'   // 导入子组件

// import {useRouter} from 'vue-router'
// const $router=useRouter()
// import axios from  'axios'
// import httpService from '../../request/https'

/**
 * <component> 标签 有一个 is 属性，is绑定的是一个组件的名称:
    可以给这个 is属性 赋值为一个 组件对象，
    这样这个<component> 标签就可以渲染指定的组件对象了。
    reactive 会使数据变成响应式，此处为了节省性能开销，可以使用 shallowRef 或者 markRaw 跳过 proxy 代理
 */
let MenuList: any = ref([
  { title: "发现音乐", iconImg: new URL('../../assets/icon/zhuye.png', import.meta.url).href, checked: true,component:shallowRef(RecommendedSings) },
  { title: "我的音乐", iconImg: new URL('../../assets/icon/xihuan.png', import.meta.url).href, checked: false ,component:shallowRef(myMusic)},
  { title: "星球漫游", iconImg: new URL('../../assets/icon/xingqiu.png', import.meta.url).href, checked: false,component:shallowRef(PlanetaryRoaming) },
  { title: "听歌统计", iconImg: new URL('../../assets/icon/bangdan.png', import.meta.url).href, checked: false,component:shallowRef(ChartStatistics) },
])
let _bottomIcon:any =ref([
  { title: "设置", iconImg: new URL('../../assets/icon/shezhi.png', import.meta.url).href,component:shallowRef(ChartStatistics) },
  { title: "对话", iconImg: new URL('../../assets/icon/duihua.png', import.meta.url).href,component:shallowRef(ChartStatistics) },
  { title: "提醒", iconImg: new URL('../../assets/icon/tixing.png', import.meta.url).href,component:shallowRef(ChartStatistics) },
])
let currentTab = shallowRef(RecommendedSings)  // 初始渲染组件
// 切换menu、组件
const ChangeBtn = (item:any,_index: number) => {
  MenuList.value.forEach((obj: any) => {
    obj['checked'] = false
  })
  MenuList.value[_index]['checked'] = true
  currentTab = item.component
}

const updateactor = () => {

}
/**
 * 获取Ip城市
 */
//  
// function getIpcity(){
//   let config:any = { headers: { Accept: 'application/json', 'Content-Type': 'application/json;charset=UTF-8'}}
//   axios.get('cityjson?ie=utf-8',config).then(res => {
//   console.log(res)
// })
// }


// 底部
const changeComponents = (item:any) => {
  currentTab = item.component
}



onMounted(() => {
  // getIpcity()
  console.log('挂载完成')
})



</script>

<style scoped lan="scss">
.bg-color-button {
  background: linear-gradient(to right bottom, rgb(248, 220, 220), #d1eaed);
}

.bg-color:hover {
  background-color: rgb(228, 223, 223);
}

.check-bg {
  background: linear-gradient(to right top, #f3817b, #EEC9e3);
}

._logoImg {
  width: 36px;
  height: 36px;
}

._backGColor {
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, .3);
}

._backBColor {
  background-color: #f7f4f4f3;
}

.svg {
  width: 25px;
  height: 25px;
}</style>