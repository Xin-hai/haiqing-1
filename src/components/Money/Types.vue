<template>
  <div>
    <ul class="types">
      <li :class="type ==='-' ? 'selected' : '' " @click="selectType('-')">支出</li>
      <li :class="type ==='+' ? 'selected' : '' " @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type: string = '-';  // '-'表示支出，'+'表示收入

  selectType(type: string) {
    if (type !== '+' && type !== '-') {
      console.error('this type is unKnow');
    }
    this.type = type;
  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";

.types {
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