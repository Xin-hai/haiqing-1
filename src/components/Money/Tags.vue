<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="newTag">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Tags extends Vue {

}
</script>

<style scoped lang="scss">
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;

  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      height: 24px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 16px;
      margin-right: 16px;
      margin-top: 6px;
    }
  }

  > .newTag {
    padding-top: 16px;

    > button {
      border: none;
      color: #999;
      border-bottom: 1px solid ;
      background: transparent;
      padding: 0 4px;
    }
  }
}
</style>