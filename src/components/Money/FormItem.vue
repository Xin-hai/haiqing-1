<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             @input = "onValueChanged($event.target.value)"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch, Prop} from 'vue-property-decorator';

@Component({})
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string

  @Watch('value')
  onValueChanged(value: string){
    this.$emit('update:value', value)
  }
}
</script>

<style scoped lang="scss">
.formItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  //background: #f5f5f5;
  font-size: 14px;

  > .name {
    padding-left: 16px;
  }

  > input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-left: 16px;
  }
}
</style>