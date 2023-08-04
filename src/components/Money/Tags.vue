<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          @click="toggle(tag)"
          :class="{selected: selectedTags.indexOf(tag)>= 0}">{{ tag.name }}
      </li>

    </ul>
    <div class="newTag">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({
})
export default class Tags extends Vue {
  selectedTags: string[] = [];
  get tagList(){
    return this.$store.state.tagList
  }

  beforeCreate(){
    this.$store.commit('fetchTags')
  }
  toggle(tag: string) {
    console.log('hi')
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags)
  }

  create() {
    const name = window.prompt('请输入新的标签名');
    if (!name) {
      return window.alert('标签名不能为空');
    }else if(name && name.length >=16){
      return window.alert('标签名不能超过16个字符，请重新输入');
    }
    this.$store.commit('createTag', name)
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";

.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  background: white;

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
      &.selected {
        background: $color-hq;
        color: #fff;
      }
    }
  }

  > .newTag {
    padding-top: 16px;

    > button {
      border: none;
      color: #999;
      border-bottom: 1px solid;
      background: transparent;
      padding: 0 4px;
    }
  }
}
</style>