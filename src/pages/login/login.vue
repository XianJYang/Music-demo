<template>
    <div class="flex flex-row items-center  h-full m-auto _color">
    <div class="flex flex-col justify-items-center items-center text-center w-4/6 tracking-wider text-4xl p-5 leading-loose _3d">
      After climbing a great hill, one only finds that there are many more hills to climb.</div>
    <div class="flex flex-col text-center w-2/6 p-6">
      <div class="flex flex-row items-center my-3 font-black">
        账户：
        <input type="text" v-model="user.userName" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
      </div>
      <div class="flex flex-row items-center my-3 font-black">
        密码：
        <input type="password" v-model="user.passWold" placeholder="Your password"
          class="input input-bordered w-full max-w-xs" />
      </div>
      <div class="flex flex-row items-center justify-around  _button">
        <div class="flex flex-row justify-items-center items-center">
          <label class="label cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-sm checked:bg-red-500" v-model="isCheck" />
          </label>
          <span
            class="label-text ml-4 _button cursor-pointer"
            @click="openText()">同意登录协议</span>
        </div>
        <div class="justify-items-center mr-3 text-sm cursor-pointer">
          修改密码
        </div>
      </div>
      <div class="btn mx-auto my-3 w-full p-4 cursor-pointer" @click="Login()">登录</div>
    </div>
  </div>
</template>


<script setup lang="ts">
// import httpService from '../../request/https'
import { reactive, ref } from 'vue'
import {useRouter} from 'vue-router'
const $router=useRouter()
const openMsg = ref('')
const isCheck = ref(false)
const user = reactive({
  userName: "",
  passWold: ''
})

/**
 * 点击登录
 */
const Login = async () => {
  if (!isCheck.value) {
    alert('请同意协议！')
    return
  }
  if (user.userName == 'admin' && user.passWold == '123') {
    openMsg.value = '登录成功'
    $router.push('/home')

  } else {
    alert('账户密码错误')
  }
}
/**
 * @description 打开协议 
 */
const openText = async () => {



}

</script>

<style scoped lang="scss">
.checkbox {
  border-color: #fff;
}
._button{
  color: #fff;
}
  ._color{
    color: #fff;
    background-image: url(/src/assets/bg-login/bg-night.jpg);
    background-size: 100% 100%;
    background-repeat-x: repeat;
  }

</style>