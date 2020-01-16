import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
// Vue.use(ElementUI)
Vue.use(element)

new Vue({
  el: '#app',
  render: h => h(App)
})
