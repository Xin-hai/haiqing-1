<template>
  <Layout class-prefix="layout">
    {{recordList}}
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


const recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]')
type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt: Date | undefined
}
@Component({
  components: {Tags, Notes, Types, NumberPad}
})

export default class Money extends Vue {
  tags = ['服饰','餐饮','住宿','交通']
  recordList: Record[] = recordList
  record: Record = {
    tags: [], notes: '', type: '-',amount: 0, createdAt: new Date(2023,8,1)
  }
  onUpdateTags(value: string[]){
    this.record.tags = value
  }
  onUpdateNotes(value: string){
    this.record.notes = value
  }
  savaRecord(){
    const record2:Record = JSON.parse(JSON.stringify(this.record)) // 拷贝一份
    record2.createdAt = new Date()
    this.recordList.push(record2)
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

