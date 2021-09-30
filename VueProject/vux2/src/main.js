import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index.js'

/*
// import VueRouter from 'vue-router'
//原来的代码
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})
*/

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
