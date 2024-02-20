<template>
    <div class="p-4 w-full h-full flex flex-row flex-wrap justify-start items-around">
        <div ref="radarChartRef"  class="w-1/5 h-1/3"></div>

    </div>
    
  </template>
   
  <script setup lang="ts">
    import echarts from '../../../utils/echarts'
    import { ref, onMounted, watch,reactive } from 'vue'
   


//    withDefaults 设置默认值
    const props = withDefaults(
      defineProps<{
        radarData:[{score:1},{score:2},{score:3},{score:4},]
      }>(),
      {},
    )
    let data = reactive([{score:1},{score:2},{score:3},{score:4},])
   
    const myChart = ref<any | null>(null)
    const radarChartRef = ref()
   
    onMounted(() => {
      myChart.value = echarts.init(radarChartRef.value) // 初始化eCharts实例
   
    //   if (props.radarData.length) {
        setOption()
    //   }
    })
   
    const setOption = () => {
      const scoreData = data.map(v => v.score)
      myChart?.value.setOption({
        radar: [
          {
            indicator: data,
            splitNumber: 10,
            axisName: {
              // 自定义文字颜色 使用字符串模板，模板变量为指示器名称 {value}
              formatter: function (value: string, indicator: any) {
                return `{a|${value}} {b|${indicator.score}分}`
              },
              // 自定义标签
              rich: {
                a: {
                  color: '#ffffff',
                  fontSize: '1rem',
                },
                b: {
                  color: '#ABA6EA',
                  fontSize: '1rem',
                },
              },
            },
            splitLine: {
              // 分隔线颜色
              lineStyle: { color: '#453A80' },
            },
            axisLine: {
              // 坐标轴线线的颜色
              lineStyle: { color: '#453A80' },
            },
            splitArea: {
              // 分隔区域颜色
              areaStyle: { color: ['#302663', '#2A1E5C'] },
            },
          },
        ],
        series: [
          {
            type: 'radar',
            areaStyle: {
              color: 'rgba(161,233,229,0.3)',
              shadowColor: 'rgb(10,216,237)',
              shadowBlur: 60,
            },
            lineStyle: { color: '#0AD8ED' },
            data: [
              {
                value: scoreData,
                name: '城市代理商综合能力图',
              },
            ],
            // 拐点颜色
            itemStyle: { color: '#fff' },
          },
        ],
      })
    }
   
    watch(
      () => props.radarData,
      () => {
        setOption()
      },
    )
   
    // 设置实例参数
    // watch(
    //   () => commonStore().clientWidth,
    //   () => {
    //     myChart.value?.resize()
    //   },
    // )
  </script>
   
  <style scoped lang="scss"></style>