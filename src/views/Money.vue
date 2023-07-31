<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync="record.amount" @submit="savaRecord" />
    <Types :value.sync = "record.type" />
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}
@Component({
  components: {Tags, Notes, Types, NumberPad}
})

export default class Money extends Vue {
  tags = ['服饰','餐饮','住宿','交通']
  recordList: Record[] = []
  record: Record = {
    tags: [], notes: '', type: '-',amount: 0
  }
  onUpdateTags(value: string[]){
    this.record.tags = value
  }
  onUpdateNotes(value: string){
    this.record.notes = value
  }
  savaRecord(){
    const record2 = JSON.parse(JSON.stringify(this.record)) // 拷贝一份
    this.recordList.push(record2)
    console.log(this.recordList)
  }

  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}

</script>


<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

