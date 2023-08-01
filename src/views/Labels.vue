<template>
  <Layout>
    <ol class="tagList">
      <li><span>衣</span> <Icons name="right" /></li>
      <li><span>食</span> <Icons name="right" /></li>
      <li><span>住</span> <Icons name="right" /></li>
      <li><span>行</span> <Icons name="right" /></li>
    </ol>
    <div>
      <button>新增标签</button>
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
  .tagList {
    background: #fff;
    > li {

    }
  }
</style>