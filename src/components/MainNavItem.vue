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