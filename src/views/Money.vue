<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>money.vue</p>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';


@Component({
  components: {}
})
export default class Money extends Vue {

}
</script>

<style scoped lang="scss">
  .nav-wrapper {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
    .content {
      flex-grow: 1;
      overflow-y: auto;
      border: 1px solid red;
    }
  }

</style>