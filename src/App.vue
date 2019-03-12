<template>
  <div id="app">
    <img alt="FFUI logo" src="./assets/logo.png">

  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

body {
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(232,232,236,1) 48%, rgba(208,210,210,1) 100%);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
