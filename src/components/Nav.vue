<template>
  <div class="nav">
    <router-link to="/money">
      <Icons name="money" />
      记账
    </router-link>
    |
    <router-link to="/labels">
      <Icons name="labels" />
      标签
    </router-link>
    |
    <router-link to="/statistics">
      统计
    <Icons name="statistics" />
    </router-link>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Icons from '@/components/Icons.vue';



@Component({
  components: {Icons}
})
export default class Nav extends Vue {

}
</script>

<style  lang="scss" scoped>
  .nav {

  }
</style>