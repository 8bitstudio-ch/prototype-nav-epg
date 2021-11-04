<template>
  <a href="#" class="btn"><slot></slot></a>
</template>

<script>
export default ({

})
</script>

<style lang="scss" scoped>
  .btn {
    display: inline-block;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .3);
    padding: .5em 1em;
    text-decoration: none;
    color: #222;
  }
</style>