import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//全局方法
import comUtils from '@/utils/comUtils';
Object.keys(comUtils).forEach(k => {
  Vue.prototype[k] = comUtils[k]
})

//给date对象增加原型方法格式化时间
Date.prototype.format = function(format) {
  var o = {
      "M+": this.getMonth() + 1, //month
      "d+": this.getDate(), //day
      "H+": this.getHours(), //hour
      "m+": this.getMinutes(), //minute
      "s+": this.getSeconds(), //second
      "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
      "f": this.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format))
      format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return format;
};

//全局组件
import selectTree from "@/components/SelectTree.vue";
Vue.component('selectTree',selectTree)

