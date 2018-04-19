import Vue from 'vue'
import App from './App.vue'
import Bus from './plugins/bus.js'

Vue.use(Bus)

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
    App
  }
})
