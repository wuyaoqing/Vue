//当前文件是主入口文件
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

/*
新建vue实例的那段代码就是将App.vue下的< template>< /template>中间的html代码渲染完之后
替代public下的index.html中id为app的html片段
*/

new Vue({
  router,    //注册路由
  store,     //引入store
  render: h => h(App)    //渲染函数将app模板渲染到#app上
}).$mount('#app')      //手动挂载到id为#app的地方
