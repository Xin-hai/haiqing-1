<template>
  <div class="not-found">
    <div >404 ,非常抱歉，你要找的页面不见了。</div>
    <div class="button">
      <router-link to="/">
        <button>返回首页</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class NotFound extends Vue {

}
</script>

<style scoped lang="scss">
  .not-found {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    > .button{
      padding: 10px 0;
      button {
        background: #8abcd1;
      }
    }
  }
</style>