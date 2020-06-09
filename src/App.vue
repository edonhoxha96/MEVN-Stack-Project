<template>
  <div id="app">
    <router-view></router-view>
    <webapp-content />
    <webapp-footer />
  </div>
  
</template>

<script>
// import HomePage from './components/HomePage.vue'
import footer from './components/Footer.vue'
import content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    'webapp-content': content,
    'webapp-footer': footer,
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
