<template>
  <Layout class-prefix="layout" title-name="记账">
    <NumberPad :value.sync="record.amount" @submit="savaRecord" />
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type" />
    <div class="notes">
      <FormItem field-name="备注" placeholder="请您输入账单备注"  @update:value="onUpdateNotes"/>
    </div>
    <Tags  />
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
    tags: [], notes: '', type: '-',amount: 0, createdAt: new Date(2023,8,1).toISOString()
  }
  get recordList(){
    return this.$store.state.recordList
  }
  recordTypeList = recordTypeList
  beforeCreate(){
    this.$store.commit('fetchRecords')
  }

  onUpdateNotes(value: string){
    this.record.notes = value
  }
  savaRecord(){
    this.$store.commit('createRecord', this.record);
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

