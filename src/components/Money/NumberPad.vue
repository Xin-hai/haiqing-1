<template>
  <div class="numberPad">
    <div class="output"> {{ output }}￥</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">ok</button>
      <button @click="inputContent" class="zero">0</button>
      <button class ='dot' @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class NumberPad extends Vue {
 @Prop() readonly value!:number
  output = this.value.toString()
  inputContent(event: MouseEvent){
    const button = (event.target as HTMLButtonElement)
    const input = button.textContent!
    if(this.output.length === 14){return}
    if(this.output === '0'){
      if ('1234567890'.indexOf(input) < 0) {
        this.output += input;
      } else {
        this.output = input;
      }
      return;
    }
    if(this.output.indexOf('.') >= 0 && input === '.'){
      return
    }
    this.output += input
  }

  remove(){
   this.output.length === 1 ?
     this.output = '0' :
     this.output = this.output.slice(0, -1)
    // this.output = this.output.substring(0, this.output.length-1)
  }
  clear(){
   this.output = '0'
  }
  ok(){
    this.$emit('update:value',this.output)
    this.$emit('submit',this.output)
    window.alert('您有一笔账单已记录在册')
    this.output = '0'
  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";

.numberPad {
  > .output {
    @extend %clearFix;
    @extend %innerShadow;
    height: 72px;
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

      &.dot{
        font-size: larger;
        font-weight: bolder;
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

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 3*5%);
      }

      &:nth-child(14) {
        background: darken($bg, 4*7%);
      }

      &:nth-child(8), &:nth-child(11) , &:nth-child(13){
        background: darken($bg, 6*4%);
      }

      &:nth-child(12) {
        background: darken($bg, 30%);
      }
    }
  }
}
</style>