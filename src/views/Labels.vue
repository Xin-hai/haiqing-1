<template>
  <Layout title-name="标签">
    <div class="tagList">
      <router-link v-for="tag in tags"
                   :key="tag.id"
                   class="tag"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icons name="right"/>
      </router-link>
    </div>
    <div class="createTagWrapper">
      <Button @click.native="createTag" class="createTag">新增标签</Button>
    </div>
  </Layout>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {Button},
})
export default class Labels extends Vue {
  get tags(){
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTags'); // 再次获取数据
  }

  createTag() {
    const name = window.prompt('请输入新的标签名');
    if (!name) {
      return window.alert('标签名不能为空');
    } else if (name && name.length >= 10) {
      return window.alert('标签名不能超过10个字符，请重新输入');
    }
    this.$store.commit('createTag', name);
    if(this.$store.state.createTagError){
      if(this.$store.state.createTagError.message === 'tag name duplicated'){
        window.alert('标签名已存在，请重新输入。')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";

.tagList {
  text-align: center;
  background: #fff;
  padding-left: 16px;

  > .tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    min-height: 44px;

    svg {
      margin-right: 18px;
      width: 18px;
      height: 18px;
      color: #666;
    }
  }
}

.createTagWrapper {
  text-align: center;
  padding: 16px;
  margin-top: 40-16px;

  .createTag {
    height: 40px;
    border-radius: 4px;
    background: $color-hq;
    padding: 0 16px;
    border: none;
    color: #fff;
  }
}


</style>