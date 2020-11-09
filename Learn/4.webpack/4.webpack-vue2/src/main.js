// 以后引入包的时候，全部使用import
import Vue from 'vue'
import App from './App.vue'
let app = new Vue({
  el: '#app',
  data: {
    name: '张三'
  },
  render: e => e(App)
})