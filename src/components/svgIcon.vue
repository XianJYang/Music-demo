<template>
    <!-- aria-hidden：默认为false，设置为true表示会把整个元素包括子元素从可访问树（AOM）上移除，但是在DOM树上还是存在的 -->
    <!-- fill：如果在动画接收还需要保持动画的值，可用于设置颜色 -->
    <svg :class="'svg-icon ' + ($attrs.iconClass ? $attrs.iconClass : '')" aria-hidden="true">
        <use class="svg-use" :href="'#' + $attrs.iconName" />
    </svg>
</template>
 
<script setup>
import { defineComponent, computed } from 'vue'
// 可以打印所有注册的svg图标
// import ids from 'virtual:svg-icons-names'
 
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>