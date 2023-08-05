<template>
  <div class="wrapper" ref="wrapper" id="wrapper">Chart</div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import * as echarts from 'echarts'
import {EChartsOption} from 'echarts';

@Component({})
export default class Chart extends Vue {
  @Prop() options?: EChartsOption

  mounted(){
    console.log(echarts)
    if(this.options === undefined){
      return console.error('options 为空')
    }
    // const myChart = echarts.init(document.getElementById('wrapper'))
    const myChart = echarts.init(this.$refs.wrapper as HTMLDivElement)
    myChart.setOption(this.options)

  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    border: 1px solid red;
    height: 50vh;
  }
</style>