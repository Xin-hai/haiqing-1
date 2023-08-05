<template>
  <Layout class-prefix="layout" title-name="海青记账" :style="{height:currentHeight+'px'}" >
    <NumberPad :value.sync="record.amount" @submit="savaRecord" />
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type" />
    <div class="notes">
      <FormItem field-name="备注" placeholder="请您输入账单备注"
                @update:value="onUpdateNotes"
                :value="record.notes"/>
    </div>
    <div class="createdAt">
      <FormItem field-name="日期" placeholder="在这里选择日期"
                type="date"
                :value.sync="record.createdAt"/>
    </div>
    <Tags  @update:value="record.tags=$event" :value="record.tags"/>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/consts/recordTypeList';

@Component({
  components: {Tabs, Tags,  FormItem, NumberPad},
})

export default class Money extends Vue {
  record: RecordItem = {
    tags: [], notes: '', type: '-',amount: 0, createdAt: new Date().toISOString()
  }
  get recordList(){
    return this.$store.state.recordList
  }

 get currentHeight(){
    return  document.documentElement.clientHeight
 }

  recordTypeList = recordTypeList

  beforeCreate(){
    this.$store.commit('fetchRecords')
  }

  onUpdateNotes(value: string){
    this.record.notes = value
  }
  savaRecord(){
    if(!this.record || this.record.tags.length ==0){
     return window.alert('请至少选择一个标签')
    }
    this.$store.commit('createRecord', this.record);
    if(this.$store.state.createRecordError === null){
      window.alert('您有一笔账单已记录在册')
      this.record.notes = ''
    }
  }
}

</script>


<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 10px 0;
}
.createdAt{
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
</style>

