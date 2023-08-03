<template>
    <Layout title-name="统计">
      <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type" />
     <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval" />
        <ol>
          <li v-for="(group, index) in result" :key="index" >
            <h3 class="title">{{group.title}}</h3>
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
<style lang="scss" scoped>
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: #fff;
}
.item-notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  font-size: 14px;
}
</style>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/consts/intervalList';
import recordTypeList from '@/consts/recordTypeList';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
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
</style>