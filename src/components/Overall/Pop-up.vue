<!-- 弹窗组件 -->
<template>
    <div class="relative z-max w-full h-full">
        <div class="absolute z-50 w-1/4 rounded-lg p-5 m-3 text-center">
            你好
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String,
})
console.log(props.msg)

</script>

<style scoped>

</style>