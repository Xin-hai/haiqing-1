<template>
    <Layout title-name="统计">
      <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type" />
     <Tabs :data-source="intervalList" :value.sync="interval" :class-prefix="interval"/>
      <div>
        type: {{type}}
        <br>
        interval: {{interval}}
      </div>
    </Layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Types from '@/components/Money/Types.vue';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/consts/intervalList';
import recordTypeList from '@/consts/recordTypeList';


@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '-'
  interval = 'day'
  intervalList = intervalList
  recordTypeList = recordTypeList
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper";
  ::v-deep .types-item {
    border-top: 1px solid red;
    &.selected {
      background: $color-hq;
    }
  }
</style>