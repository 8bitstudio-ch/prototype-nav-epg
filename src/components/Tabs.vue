<template>
  <div class="nav">
    <slot name="navTabs"></slot>
  </div>

  <div class="content">
    <slot name="tabContent"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .nav {
    background: #fff;
    padding: 1.5rem;
    width: 20%;
  }

  .content {
    padding: 1.5rem;
    flex: 1;
  }
</style>