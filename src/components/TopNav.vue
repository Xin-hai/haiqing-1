<template>
  <div class="head">{{topName}}</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Head extends Vue {
    topName: string = '海青记账'
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";
  .head {
    background: $color-hq;
    height: 38px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
</style>