<template>
  <div class="wrapper" ref="wrapper" id="wrapper">Chart</div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import * as echarts from 'echarts'
import {EChartsOption, EChartsType} from 'echarts';

@Component({})
export default class Chart extends Vue {
  @Prop() options?: EChartsOption
  myChart?: EChartsType;

  mounted(){
    if(this.options === undefined){
      return console.error('options 为空')
    }
    // const myChart = echarts.init(document.getElementById('wrapper'))
    this.myChart = echarts.init(this.$refs.wrapper as HTMLDivElement)
    this.myChart.setOption(this.options)
  }
  @Watch('options')
  onOptionsChanged(newValue: EChartsOption){
    this.myChart?.setOption(newValue)
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    height: 45vh;
  }
</style>