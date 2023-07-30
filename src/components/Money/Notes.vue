<template>
  <div>
    {{value}}
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" :value="value" @input="onInput"   placeholder="请在此输入账单备注" >
    </label>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Notes extends Vue {
  value = ''
  onInput(event: KeyboardEvent){
    const input = event.target as HTMLInputElement
    this.value = input.value
  }
}
</script>

<style scoped lang="scss">
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
</style>