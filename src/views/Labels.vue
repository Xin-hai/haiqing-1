<template>
  <Layout>
    <ol class="tagList">
      <li v-for="tag in tags" :key="tag">
        <span>{{tag}}</span>
        <Icons name="right" />
      </li>
    </ol>
    <div class="createTagWrapper">
      <button @click="createTag" class="createTag">新增标签</button>
    </div>
  </Layout>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch()

@Component
export default class Labels extends Vue {
  tags = tagListModel.data
  createTag(){
    const name = window.prompt('请输入新的标签名')
    if(name){
     const message = tagListModel.create(name)
      if(message === 'duplicated'){
        window.alert('标签名已存在')
      }else if(message === 'success'){
        window.alert('添加成功')
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