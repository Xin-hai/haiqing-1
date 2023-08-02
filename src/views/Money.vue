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
import {Vue, Component} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import store from '@/store/index2'

@Component({
  components: {Tags,  FormItem, Types, NumberPad}
})

export default class Money extends Vue {
  tags = store.tagList;
  recordList = store.recordList
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
    store.createRecord(this.record)
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

