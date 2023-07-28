<template>
  <div class="nav">
    <router-link to="/money">
      <svg>
        <use xlink:href="#labels"></use>
      </svg>
      记账
    </router-link>
    |
    <router-link to="/labels">标签</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../assets/icons',true,/\.svg$/))
} catch(error){
  console.log(error)
}


@Component({})
export default class Nav extends Vue {

}
</script>

<style  lang="scss" scoped>
  .nav {

  }
</style>