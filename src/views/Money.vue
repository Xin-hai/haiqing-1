<template>
  <Layout class-prefix="layout" title-name="记账">
    <NumberPad :value.sync="record.amount" @submit="savaRecord" />
    <Types :value.sync = "record.type" />
    <div class="notes">
      <FormItem field-name="备注" placeholder="请您输入账单备注"  @update:value="onUpdateNotes"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import recordListModel from '@/models/recordListModel.ts';
import tagListModel from '@/models/tagListModel';


const recordList = recordListModel.fetch()
const tagList = tagListModel.fetch()


@Component({
  components: {Tags,  FormItem, Types, NumberPad}
})

export default class Money extends Vue {
  tags = tagList
  recordList: RecordItem[] = recordList
  record: RecordItem = {
    tags: [], notes: '', type: '-',amount: 0, createdAt: new Date(2023,8,1)
  }
  onUpdateTags(value: string[]){
    this.record.tags = value
  }
  onUpdateNotes(value: string){
    this.record.notes = value
  }
  savaRecord(){
    const record2:RecordItem = recordListModel.clone(this.record)  // 拷贝一份
    record2.createdAt = new Date()
    this.recordList.push(record2)
  }

  @Watch('recordList')
  onRecordListChange(){
    recordListModel.save(this.recordList)
  }
}

</script>


<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>

