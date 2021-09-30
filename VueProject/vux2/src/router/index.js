import Vue from 'vue'
import Router from 'vue-router'
import HelloFromVux from '@/pages/HelloFromVux'
import Toast from '@/pages/Toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/HelloFromVux',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('../pages/HelloWorld.vue')
    },
    {
      path: '/Tools',
      name: 'Tools',
      component: () => import('../pages/Tools.vue')
    },
    {
      path: '/BaseComponents',
      name: 'BaseComponents',
      component: () => import('../pages/BaseComponents.vue')
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: () => import('../pages/Layout.vue')
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: () => import('../pages/Alert.vue')
    }
  ]
})
