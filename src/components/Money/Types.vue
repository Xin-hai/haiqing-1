<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Types extends Vue {

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