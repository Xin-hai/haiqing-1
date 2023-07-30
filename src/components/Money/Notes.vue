<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value" placeholder="请在此输入账单备注" >
    </label>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Notes extends Vue {
  value = ''
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