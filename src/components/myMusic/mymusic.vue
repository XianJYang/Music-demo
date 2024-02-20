import { reactive } from 'vue';
<template>
    <div class="w-full h-full py-4 flex flex-row select-none">
        <!-- 播放器 -->
        <div class="w-2/5" v-if="store.isPlay">
           <PlayerTools/>
        </div>
        <!--  歌单 -->
        <div :class="[store.isPlay ? 'w-3/5 duration-300' : 'w-full']">
            <div class="overflow-y-auto">
                <table class="table table-md">
                    <!-- head -->
                    <thead class="text-center">
                        <tr>
                            <th>序列</th>
                            <th>歌曲</th>
                            <th>专辑</th>
                            <th>其他</th>
                        </tr>
                    </thead>
                    <tbody class="p-2 text-center">
                        <tr class="bg-color-hover" v-for="(item, index) in tableList.Sings" :key="index"
                            @dblclick="playMusic(item)">
                            <th>{{ item.point }}</th>
                            <td>
                                <div class="flex items-center gap-3 text-center">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="../../assets/icon/bofang.png" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{{ item.singName }}</div>
                                        <div class="text-sm opacity-50">{{ item.singer }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{{ item.actor }}</td>
                            <td class="text-center">
                                <div class="dropdown">
                                    <div tabindex="0" role="button" class="btn min-w-9 w-1/4">
                                        <img src="../../assets/icon/more.png" class="cursor-pointer" />
                                    </div>
                                    <ul tabindex="0"
                                        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                                        <li @click="openMore(item, index, 'del')"><a>心碎</a></li>
                                        <li @click="openMore(item, index, 'join')">
                                            <a>下一首播放</a>
                                        </li>
                                        <li @click="openMore(item, index, 'down')"><a>下载</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="w-72 h-full p-4">
            <div class="join w-full h-10 relative mb-4">
                <img class="_img" src="../../assets/icon/sousuo.png" />
                <input class="input w-full h-9 pl-8 input-bordered" placeholder="搜索" />
            </div>
            <!-- img区域 -->
            <div class="flex flex-row justify-start w-full my-2">
                <div class="card w-72 bg-base-100 shadow-xl image-full p-0">
                    <figure>
                        <img src="../../assets/bg-login/bg-night.jpg" alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">我的喜欢</h2>
                        <p class="fs12">2024-2-19创建</p>
                        <div class="card-actions justify-end">
                            <button class="btn h-9 _Startcolor">播放全部</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="stats box-shadow-drop w-full py-4 my-2">
                <div class="stat pt-2">
                    <div class="stat-title mb-2">歌单信息</div>
                    <div class="stat-value">400 首</div>
                    <div class="stat-actions flex flex-row justify-around">
                        <button class="btn">下载</button>
                        <button class="btn">分享</button>
                        <button class="btn">评论</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { IsPlayStore } from '@/store/isplay'
import  PlayerTools from '../PlayerTools.vue'
const store = IsPlayStore()


const tableList = reactive({
    Sings: [
        { point: 1, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 2, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 3, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 4, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 5, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 6, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 7, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 8, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 9, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 10, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 11, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 12, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 13, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
        { point: 14, singName: "Cy", singer: "chaoyang", actor: "Galaxy Music" },
    ],
});

// 更多操作
const openMore = (item:object,index:number,type:string) => { 
    console.log(item,index,type)
};


/**
 * 双击播放音乐
 * @param {object} item
 */
const playMusic = (item: any) => {
    console.log(item)
    if (!store.isPlay) {
        // 改变记录状态
        store.$patch({
            isPlay: true,
        })
    }
}

</script>

<style scoped lang="scss">
table{
    border-collapse: collapse;
}
.bg-color-hover {
    display: block;
    border: 0px !important;
    color: #272626;
    border-radius: 12px;
}

.bg-color-hover:hover {
    border: 0px;
    background: linear-gradient(to right bottom, rgb(248, 220, 220), #d1eaed);
    border-radius: 12px;
    box-shadow: 1px 1px 1px #fff;
    display: block;
}

._img {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 25px;
    height: 25px;
}

._imgICon {
    width: 10rem;
}

.iconMore {
    width: 1rem;
}

._Startcolor {
    background: #fc3b5b;
    color: #fff;
}

.box-shadow-drop {
    filter: drop-shadow(1px 1px 1px #000);
    box-shadow: 1px 1px 1px #ccc;
}

/*滚动条样式*/
::-webkit-scrollbar {
    background: transparent !important;
    width: 6px;
}

/*滚动条轨道的样式*/
::-webkit-scrollbar-track {
    background: transparent;
    width: 6px;
}

/*滚动条滑块的样式*/
::-webkit-scrollbar-thumb {
    background: linear-gradient(to right bottom, rgb(248, 220, 220), #d1eaed);
    width: 6px;
    border-radius: 4px;
}
</style>
