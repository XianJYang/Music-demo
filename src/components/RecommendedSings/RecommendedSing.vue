<template>
    <div class="flex-row bg-slate-50 rounded-2xl shadow-lg  h-full  overflow-y-auto flex justify-between justify-items-start flex-wrap transition duration-300 ease-in-out" >
        <div class="card p-4 card-compact w-1/5 h-max bg-base-100 shadow-xl m-3"  v-for="(item, index) in hotItem.VideoList" :key="index" >
            <figure><img :src="item.img" class="h-5/6 max-h-96" alt="video" /></figure>
            <div class="card-body">
                <h2 class="card-title">{{ item.nm }}</h2>
                <p>主演：{{ item.star }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary h-8 min-h-8 mt-4">查看</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import httpService from '../../request/https'
import { log } from 'console';


let hotItem = reactive({
    VideoList:[]
})
/**
 * @description 推荐歌单
 */
function Recommended(): void {
    httpService.get('', {}).then((res) => {
        hotItem.VideoList = res.data.movieList
    })
}


onMounted(() => {
    // 执行推荐歌单 
    Recommended()
    console.log('Xxxx')
})



</script>
  
<style scoped lan="scss">
.active{
    background-color: darkgrey!important;
}
._logoImg {
    width: 36px;
    height: 36px;
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