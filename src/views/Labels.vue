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
      <el-button type="text" @click="createTag" class="createTag">新增标签</el-button>
    </div>
  </Layout>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { MessageBoxInputData } from 'element-ui/types/message-box';

@Component({})
export default class Labels extends Vue {

  get tags(){
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTags'); // 再次获取数据
  }

  createTag(){
    this.$prompt('请输入新的标签名', '海青记账提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern: /^.{1,10}$/,
      center: true,
      inputErrorMessage: '标签名已存在或超过10个字符，请重新输入'
    }).then(( res ) => {
      const value = (res as MessageBoxInputData).value
      this.$message({
        type: 'success',
        message: '您新建的标签名为: ' + value
      });
      this.$store.commit('createTag', value) // value就是原先的name this.$store.commit('createTag', name);
    }).catch(() => {
      // console.log('取消输入')
    })
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