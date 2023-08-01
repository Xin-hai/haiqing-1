<template>
  <Layout title-name="编辑标签">
    <div>
      <span>
        <Icons name="left"/>
        编辑标签
      </span>
      <Notes field-name="标签名" placeholder="请输入账单备注"/>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import Notes from '@/components/Money/Notes.vue';

@Component({
  components: {Notes}
})
export default class EditLabel extends Vue {
  created(){
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.find(t => t.id === id )
    if(tag){
      console.log(tag)
    }else{
      this.$router.replace('/404')
    }
  }
}
</script>

<style scoped lang="scss">

</style>