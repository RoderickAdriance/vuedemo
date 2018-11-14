// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Demo from './Demo'
import router from './router'

Vue.config.productionTip = false

//创建和挂载根实例。
new Vue({
  el: '#app',
  router,
  components: {Demo},
  template: '<Demo/>'
})
