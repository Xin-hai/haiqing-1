<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync="record.amount" />
    <Types :value.sync = "record.type" />
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
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
  record: Record = {
    tags: [], notes: '', type: '-',amount: 0
  }
  onUpdateTags(value: string[]){
    this.record.tags = value
  }
  onUpdateNotes(value: string){
    this.record.notes = value
  }
}

</script>


<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

