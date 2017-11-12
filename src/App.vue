<template>
  <div id="app" style="height:100%;">
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
