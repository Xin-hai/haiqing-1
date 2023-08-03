<template>
    <Layout title-name="统计">
      <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type" />
     <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval" />
        <ol>
          <li v-for="(group, index) in result" :key="index">
            {{group.title}}
            <ol>
              <li v-for="item in group.items" :key="item['id']">{{item.amount}} |  {{item.createdAt}}</li>
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

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
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
</style>