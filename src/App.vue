<template>
  <div id="app">

    <Shopping />
  </div>
</template>

<script>
  import Shopping from './components/Shopping.vue'

  export default {
    name: 'App',
    data() {
      return {
        message: '首頁！'
      } 
    },
    components: {
      Shopping
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
