import Vue from 'vue'
import App from './App.vue'
import './css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    message: 'Hello Vue'
  }
}).$mount('#app')
