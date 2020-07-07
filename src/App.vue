<template>
  <div id="app">
    <webapp-header />
    <!-- <webapp-navbar /> -->
    <router-view></router-view>
    <webapp-footer />
  </div>
  
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"> </script>
<script>
// import HomePage from './components/HomePage.vue'
import footer from './components/Footer.vue'
import header from './components/Header.vue'
// import navbar from './components/Nav-bar.vue'

export default {
  name: 'App',
  components: {
    'webapp-footer': footer,
    'webapp-header': header,
    // 'webapp-navbar': navbar,
  //   HomePage
  },
data() {
  return {

  }
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(159, 156, 187);
}
</style>
