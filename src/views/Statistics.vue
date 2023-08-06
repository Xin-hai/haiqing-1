<template>
    <Layout title-name="统计">
      <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type" />
      <div class="chartWrapper" ref="wrapper">
        <Chart :options="chartOptions" class="myChart" />
      </div>
        <ol v-if="groupedList.length > 0">
          <li v-for="(group,index) in groupedList" :key="index" >
            <h3 class="title">{{beautify(group.title)}}<span>￥{{group.total.toString().replace(/^(\-)*(\d+)\.(\d).*$/, "$1$2.$3")}}</span></h3>
            <ol>
              <li v-for="item in group.items" :key="item['id']" class="record">
                <span>{{tagString(item.tags)}}</span>
                <span class="item-notes">{{item.notes}}</span>
                <span>￥{{item.amount}}</span>
              </li>
            </ol>
          </li>
        </ol>
      <div v-else class="good-notice">
        <span>目前无相关账单记录</span>
        <img :src="require('../assets/images/crying.jpg')" alt="crying picture" title="crying">
      </div>
    </Layout>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/consts/recordTypeList';
import dayjs from 'dayjs'
import clone from '@/lib/clone';
import _ from 'lodash'
import Chart from '@/components/Chart.vue'


@Component({
  components: {Chart,Tabs}
})

export default class Statistics extends Vue {
  beautify(string: string){
    const day = dayjs(string)
    const now = dayjs()
    if(day.isSame(now,'day')){
      return '今天'
    } else if(day.isSame(now.subtract(1, 'day'),'day')){
      return '昨天'
    }else if(day.isSame(now.subtract(2, 'day'),'day')){
      return '前天'
    }else if(day.isSame(now,'year')){
      return day.format('M月DD日')
    }else{
      return day.format('YYYY年M月DD日')
    }
  }
  tagString(tags: Tag[]){
    return tags.length === 0 ? '无' : tags.map(t=>t.name).join('，')
  }
  get recordList(){
    return (this.$store.state as RootState).recordList
  }

  get keyValuesList(){
    const today = new Date()
    const array = []
    for(let i=0; i<=29; i++){
      const dateString = dayjs(today)
          .subtract(i,'day')
          .format('YYYY-MM-DD')
      array.push({key: dateString, value: _.find(this.groupedList,{title:dateString})?.total
      })
    }
    array.sort((a,b) =>{
      return a.key > b.key ? 1 : a.key === b.key ? 0 : -1;
    })
    return array
  }

  get chartOptions(){
   const keys = this.keyValuesList.map(item=>item.key)
    const values = this.keyValuesList.map(item=>item.value)
    return {
      title: {text: '海青记账',right: '9%',top: 10,textStyle:{color: '#22a2c3'}},
      tooltip: {
        show: true,
        triggerOn: 'click',
        formatter: '{c}',
        position: 'top'
      },
      grid: {
        left: 0,
        top: 60,
        bottom: 40,
        right: 0,
      },
      xAxis: {
        type: 'category',
        data: keys,
        axisTick: {
          show: true,
          alignWithLabel: true
        },
        axisLabel: {
          formatter: function (value: string) {
            return value.substring(5)
          }
        },
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        connectNulls: true,
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          borderWidth: 10,
          color: '#22a2c3'
        },
        lineStyle: {
          width: 2
        },
          data: values,
          type: 'line',
          smooth: true
        }]
    }
  }

  get groupedList(){
    const {recordList} = this

    const newList = clone(recordList)
        .filter(r =>r.type === this.type)
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())
    if(newList.length === 0){return [] as Result}
    type Result = {title: string,total?: number, items: RecordItem[] }[]

    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [ newList[0] ] }]
    for(let i=1;i<newList.length;i++){
      const current = newList[i]
      const last = result[result.length -1]
      if(dayjs(last.title).isSame(dayjs(current.createdAt),'day')){
        last.items.push(current)
      }else{
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [ current ] })
      }
    }
     result.forEach(group =>{
      group.total = group.items.reduce((sum, item) => sum +item.amount, 0)
    })
    return result
  }
  mounted(){
    const div = (this.$refs.wrapper as HTMLDivElement)
    div.scrollLeft = div.scrollWidth
  }
  created(){
    this.$store.commit('fetchRecords')
  }
  type = '-'
  recordTypeList = recordTypeList

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";

 .good-notice{
   padding: 16px;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column-reverse;
   font-size: 18px;
}

  ::v-deep {
    .type-tabs-item{
      border-top: 1px solid ;
    }
    .interval-tabs-item {
      height: 48px;
    }
  }
%item {
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  @extend %item;
  padding-left: 16px;
  padding-right: 16px;
}
.record {
  @extend %item;
  background: #fff;
  padding-left: 16px;
  padding-right: 16px;
}
.item-notes {

  margin-right: auto;
  margin-left: 16px;
  color: #999;
  font-size: 14px;
}
.myChart {
  width: 430%;
}
.chartWrapper {
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

</style>