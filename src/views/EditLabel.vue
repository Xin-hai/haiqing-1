<template>
  <Layout title-name="编辑标签">
    <div class="form-wrapper">
      <FormItem :value="tag.name"
                @update:value="updateTag"
                field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem},
})
export default class EditLabel extends Vue {
  get tag(){
    return this.$store.state.currentTag
  }

  created() {
    const id = this.$route.params.id;
    this.$store.commit('setCurrentTag',id)
    console.log(this.tag)
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string){
    if(this.tag) {
      // TODO
      // oldStore.updateTag(this.tag.id, name)
    }
  }
  remove(){
    if(this.tag){
      return
      // TODO
      // if(oldStore.removeTag(this.tag.id)){
      //   this.$router.back()
      // }else {
      //   window.alert('删除失败')
      // }
    }
  }
}
</script>

<style scoped lang="scss">
  .form-wrapper{
    background: #fff;
    margin-top: 8px;
  }
  .button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }

</style>