<template>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}

.container {
  max-width: 1440px;
  margin: auto;
  text-align: left;
}
</style>
