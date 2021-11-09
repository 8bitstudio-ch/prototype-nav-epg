<template>
  <a href="#">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    submenu: String,
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: #222;
    font-size: 18px;
    padding: 1.5em;
    display: block;
    text-decoration: none;
  }
</style>