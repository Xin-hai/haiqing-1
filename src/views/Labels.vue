<template>
  <Layout>
    <ol class="tagList">
      <li><span>衣</span> <Icons name="right" /></li>
      <li><span>食</span> <Icons name="right" /></li>
      <li><span>住</span> <Icons name="right" /></li>
      <li><span>行</span> <Icons name="right" /></li>
    </ol>
    <div class="createTagWrapper">
      <button class="createTag">新增标签</button>
    </div>
  </Layout>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';


@Component({

})
export default class Labels extends Vue {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";
  .tagList {
    text-align: center;
    background: #fff;
    padding-left: 16px;
    > li {
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