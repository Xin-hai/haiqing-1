<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<style scoped lang="scss">
.nav-wrapper {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    border: 1px solid #22a2c3;
    flex-grow: 1;
    overflow-y: auto;
  }
}

</style>

<script lang="ts">

</script>