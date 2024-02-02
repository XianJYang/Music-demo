<template>
  <!-- h-full  -->
  <div class="container  flex flex-row items-center bg-[url('../assets/bg-login/bg-night.jpg')]">
    <div
      class="flex flex-col justify-items-center items-center w-4/6 tracking-wider text-4xl p-5 blur-ts leading-loose text-slate-50">
      After climbing a great hill, one only finds that there are many more hills to climb.</div>
    <div class="flex flex-col text-center w-2/6">
      <div class="flex flex-row items-center my-3 font-black">
        账户：
        <input type="text" v-model="user.userName" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
      </div>
      <div class="flex flex-row items-center my-3 font-black">
        密码：
        <input type="password" v-model="user.passWold" placeholder="Your password"
          class="input input-bordered w-full max-w-xs" />
      </div>
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row justify-items-center items-center">
          <label class="label cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-sm" v-model="isCheck"/>
          </label>
          <span
              class="label-text ml-4 text-black hover:text-cyan-600 hover:border-b hover:border-b-cyan-600 animate-[_animate_0.5s_linear_ infinite]" @click="openText()">同意登录协议</span>
        </div>
        <div class="justify-items-center mr-3 text-sm">
          修改密码
        </div>
      </div>
      <div class="btn mx-auto my-3 w-full p-4" @click="Login()">登录</div>
    </div>
  </div>

</template>


<script setup lang="ts">

import { reactive,ref } from 'vue'
const openMsg = ref('')
const isCheck = ref(false)
const user = reactive({
  userName: "",
  passWold: ''
})

/**
 * 点击登录
 */
const Login = () => {
  if(!isCheck.value){
    alert('请同意协议！')
    return
  }
  if (user.userName == 'admin' && user.passWold == '123') {
    openMsg.value = '登录成功'
  }else{
    alert('账户密码错误')
  }
}
/**
 * @description 打开协议 
 */
const openText =()=>{

}

</script>

<style scoped>
</style>