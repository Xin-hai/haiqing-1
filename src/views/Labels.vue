<template>
  <Layout title-name="标签">
    <div class="tagList">
      <router-link v-for="tag in tags"
                   :key="tag.id"
                   class="tag"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icons name="right" />
      </router-link>
    </div>
    <div class="createTagWrapper">
      <Button @click.native="createTag" class="createTag">新增标签</Button>
    </div>
  </Layout>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue'
import store from '@/store/index2'

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = store.tagList
  createTag() {
    const name = window.prompt('请输入新的标签名')
    if (name) {
      store.createTag(name)
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

  .createTagWrapper{
    text-align: center;
    padding: 16px;
    margin-top: 40-16px;
    .createTag{
      height: 40px;
      border-radius: 4px;
      background: $color-hq;
      padding: 0 16px;
      border: none;
      color: #fff;
    }
  }


</style>