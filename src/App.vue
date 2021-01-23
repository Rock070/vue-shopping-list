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
    },
    props: {
      
    }
  }
</script>
