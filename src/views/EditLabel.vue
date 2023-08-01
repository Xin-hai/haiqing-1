<template>
  <Layout>
    编辑标签
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

@Component({})
export default class EditLabel extends Vue {
  created(){
    const id = this.$route.params.id
    console.log(id)
     tagListModel.fetch
    const tags = tagListModel.data
    const tag = tags.filter(t=>t.id === id)[0]
    if(tag){
      console.log(tag);
    }else {
      this.$router.replace('/404')
    }
  }
}
</script>

<style scoped lang="scss">

</style>