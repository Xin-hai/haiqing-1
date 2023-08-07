<template>
  <Layout title-name="编辑标签">
    <div class="form-wrapper">
      <FormItem :value="currentTag['name']"
                @update:value="updateTag"
                field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button
          class="save-button"
          :value="currentTag['name']"
          @click="save">保存</Button>
      <Button @click="remove">删除</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
import router from '@/router';

@Component({
  components: {Button, FormItem},
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag
  }

  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags')
    this.$store.commit('setCurrentTag', id)
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string) {
    if (this.currentTag) {
      this.$store.commit('updateTag', {id: this.currentTag.id, name: name})
    }
  }

  remove() {
    if (this.currentTag) {
      this.$confirm('此操作将永久删除该标签, 是否继续?', '海青记账提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit('removeTag', this.currentTag.id)
      }).catch(() => {
      })
    }
  }

  save() {
    if (this.currentTag) {
      if(!this.currentTag.name || this.currentTag.name ===''){
        this.$message({
          type: 'warning',
          message: '当前的标签名为空，请重新输入'
        })
      } else if(this.$store.state.saveTagError === null){
        this.$store.commit('saveTags')
        this.$message.success('保存成功')
        router.back()
      }else if((this.$store.state.saveTagError.message)=== 'duplication'){
        this.$message({
          type: 'warning',
          message: '当前的标签名已存在，请重新输入'
        })
      }
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
  .save-button {
    background: #22a2c3;
    margin-right: 60px;
  }

</style>