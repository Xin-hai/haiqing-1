<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="head">

      <Icons class="leftIcon" name="left" v-if="this.titleName === '编辑标签'"/>
      <span class="leftIcon"  v-else></span>
      <span class="title">{{titleName}}</span>
      <span class="rightIcon"></span>
    </div>
    <div class="content" :class=" classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">

import {Vue, Component, Prop} from 'vue-property-decorator';

@Component

export default class Types extends Vue{

  @Prop() ['classPrefix']: string
  @Prop({required: true}) titleName!: string




}
</script>


<style scoped lang="scss">
@import "~@/assets/style/helper";
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    flex-grow: 1;
    overflow-y: auto;
  }
  .head {
    //background: $color-hq;
    //height: 40px;
    //text-align: center;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    //color: #fff;
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: $color-hq;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .title {

    }
    > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon{
      width: 24px;
      height: 24px;
    }
  }
}

</style>

