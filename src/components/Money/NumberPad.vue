<template>
  <div class="numberPad">
    <div class="output">100￥</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">ok</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class NumberPad extends Vue {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";
.numberPad {
  > .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    text-align: right;
    font-family: Consolas, monospace, $font-fangSong;
    padding: 9px 16px;
  }
  > .buttons {
    @extend %clearFix;

    button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      $bg: #a1d4e1;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 5%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 2*5%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 3*5%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(14) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(12) {
        background: darken($bg, 5*5%);
      }
    }
  }
}
</style>