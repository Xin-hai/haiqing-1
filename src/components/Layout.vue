<template>

  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <TopNav />
    <div class="content" :class=" classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">

import TopNav from '@/components/TopNav.vue';

export default {
 name: 'Layout',
  components: {TopNav},
  props: ['classPrefix']
}
</script>


<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    flex-grow: 1;
    overflow-y: auto;
  }
}

</style>

