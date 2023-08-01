<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="head">{{titleName}}</div>
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
    background: $color-hq;
    height: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
}

</style>

