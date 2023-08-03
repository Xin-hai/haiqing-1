<template>
    <Layout title-name="统计">
      <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type" />
     <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval" />
        <ol>
          <li v-for="group in result" :key="group.title" >
            <h3 class="title">{{beautify(group.title)}}</h3>
            <ol>
              <li v-for="item in group.items" :key="item['id']" class="record">
                <span>{{tagString(item.tags)}}</span>
                <span class="item-notes">{{item.notes}}</span>
                <span>{{item.amount}}￥</span>
              </li>
            </ol>
          </li>
        </ol>
    </Layout>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/consts/intervalList';
import recordTypeList from '@/consts/recordTypeList';
import dayjs from 'dayjs'


@Component({
  components: {Tabs}
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
    }
  return day.format('YYYY年M月DD日')
  }
  tagString(tags: Tag[]){
    return tags.length === 0 ? '无' : tags.join(',')
  }
  get recordList(){
    return (this.$store.state as RootState).recordList
  }
  get result(){
    const {recordList} = this
    type HashTableValue = {title: string, items: RecordItem[]}
    const hashTable:{[key: string]:HashTableValue} = {}
    for(let i=0;i<recordList.length;i++){
      const [date,time] = recordList[i].createdAt!.split('T')
      hashTable[date] = hashTable[date] || {title: date,items: []}
      hashTable[date].items.push(recordList[i])
    }
    return hashTable
  }
  created(){
    this.$store.commit('fetchRecords')
  }
  type = '-'
  interval = 'day'
  intervalList = intervalList
  recordTypeList = recordTypeList

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";
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
}
.record {
  @extend %item;
  background: #fff;
  padding-left: 24px;
  padding-right: 16px;
}
.item-notes {

  margin-right: auto;
  margin-left: 16px;
  color: #999;
  font-size: 14px;
}
</style>