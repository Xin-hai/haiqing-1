<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value"
    @click="select(item)"
    :class="liClass(item)">{{item.text}}</li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

type DataSourceItem = {text: string, value: string}
@Component({})
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[]
  @Prop(String) readonly value!:string
  @Prop(String) readonly classPrefix?: string
  liClass (item: DataSourceItem) {
    return {
      selected: item.value === this.value,
      [this.classPrefix+ '-tabs-item']: this.classPrefix
    }
  }
  select(item: DataSourceItem){
    this.$emit('update:value', item.value)
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";

.tabs {
  display: flex;
  background: #c4c4c4;
  font-size: 24px;
  text-align: center;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
      color: #fff;
      background: $color-hq;
    }
  }
}
</style>