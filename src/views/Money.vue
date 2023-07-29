<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">100</div>
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

    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请在此输入账单备注">
      </label>
    </div>
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

  </Layout>
</template>

<style lang="scss">

.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style scoped lang="scss">
@import "~@/assets/style/helper.scss";


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

.tags {
  border: 1px solid red;
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

.notes {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f5f5f5;
  font-size: 14px;

  > .name {
    padding-left: 16px;
  }

  > input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-left: 16px;
  }
}

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

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';


@Component({
  components: {}
})

export default class Money extends Vue {

}
</script>

