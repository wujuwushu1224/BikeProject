<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },
}
</script>

<style>
body {
  margin:0;
}
#app {
  padding: 0;
  margin: 0;
}
#app .vux-header {
  background-color: #000;
  z-index: 999;
}
</style>
