<template>
    <nav>
      <router-link to="/money" class="item" active-class="selected">
        <Icons name="money" />
        记账
      </router-link>

      <router-link to="/labels" class="item" active-class="selected">
        <Icons name="labels" />
        标签
      </router-link>

      <router-link to="/statistics" class="item" active-class="selected">
        <Icons name="statistics" />
        统计
      </router-link>
    </nav>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Icons from '@/components/Icons.vue';




@Component({
  components: { Icons}
})
export default class Nav extends Vue {

}
</script>

<style  lang="scss" scoped>
@import "~@/assets/style/helper.scss";

nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;

  > .item {
    padding: 3px 0;
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    > .icon {
      width: 32px;
      height: 32px;
    }
  }
  .item.selected {
    color:  $color-hq;
  }
}
</style>