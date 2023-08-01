<template>
  <button class="button"
  @click="$emit('click',$event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Button extends Vue {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";


  .button{
    height: 40px;
    border-radius: 4px;
    background: #ee3f4d;
    padding: 0 16px;
    border: none;
    color: #fff;
  }

</style>