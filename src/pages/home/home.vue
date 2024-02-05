<template>
  <div class="flex flex-row bg-slate-50 rounded-2xl shadow-lg  h-full m-2 overflow-hidden">
    <!-- left -->
    <div class="w-2/12  rounded-l-2xl  _backGColor shadow-inner flex flex-col  justify-items-center items-center">
      <!-- logo -->
      <div class="w--full mb-6">
        <div class="flex flex-row justify-around items-center p-4 text-sm text-slate-200 rounded-xl w-full h-24">
          <img class="_logoImg" src="../../assets/icon/xingqiu.png" alt="">
          <div class="ml-4 text-sm font-black">Galaxy Music</div>
        </div>
      </div>
      <!-- Menu -->
      <div class="flex flex-col  justify-items-center items-center" v-for="(item, index) in MenuList" :key="index">
        <div class="flex flex-row justify-items-center items-center my-4 text-sm text-slate-200 cursor-pointer" @click="ChangeBtn(item,index)">
            <img class="svg" :class="[item.checked?'grayscale-0':'grayscale']" src="../../assets/icon/bangdan.png" />
          <div class="mx-4 text-sm" :class="[item.checked?'text-neutral-950':'text-neutral-400']">{{ item.title }}</div>
        </div>
      </div>
    </div>


    <div class="w-10/12 rounded-r-2xl _backBColor"></div>
  </div>
</template>


<script setup lang="ts">
import { onMounted,ref} from 'vue'
let MenuList: any =ref([
  { title: "推荐", iconImg: '../../assets/icon/xingqiu.png',checked:true },
  { title: "发现", iconImg: '@/assets/icon/bofang.png',checked:false  },
  { title: "我的音乐", iconImg: '@/assets/icon/xingqiu.png',checked:false  },
  { title: "广场", iconImg: '@/assets/icon/xingqiu.png',checked:false  },
  { title: "听歌统计", iconImg: '@/assets/icon/xingqiu.png',checked:false },
]) 
// 切换
const ChangeBtn = (item: {},_index:number) => {
  MenuList.value.forEach((obj:any)=>{
    obj['checked'] = false 
  })
  MenuList.value[_index]['checked'] = true
  console.log(_index,item,MenuList)
}

onMounted(() => {

  console.log('Xxxx')
})



</script>

<style scoped lan="scss">
._logoImg {
  width: 40px;
  height: 40px;
}

._backGColor {
  background-color: #fff;
}

._backBColor {
  background-color: #f7f4f4f3;
}

.svg {
  width: 25px;
  height: 25px;
}
</style>