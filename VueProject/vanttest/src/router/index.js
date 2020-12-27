import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cell',
    component:() => import('../views/Cell.vue')
  },
  {
    path: '/Template',
    name: 'Template',
    component:() => import('../views/Template.vue')
  },
  {
    path: '/ToastAndButton',
    name: 'ToastAndButton',
    component:() => import('../views/ToastAndButton.vue')
  },
  {
    path: '/DropdownMenu',
    name: '下拉刷新',
    component:() => import('../views/DropdownMenu.vue')
  },
  {
    path: '/PullRefresh',
    name: 'PullRefresh',
    component:() => import('../views/PullRefresh.vue')
  },
  {
    path: '/List',
    name: 'List',
    component:() => import('../views/List.vue')
  },
  {
    path: '/Image',
    name: 'Image',
    component:() => import('../views/Image.vue')
  },
  {
    path: '/Popup',
    name: 'Popup',
    component:() => import('../views/Popup.vue')
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component:() => import('../views/Calendar.vue')
  },
  {
    path: '/Form',
    name: 'Form',
    component:() => import('../views/Form.vue')
  },
  {
    path:'*',
    name:'404',
    component:() => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
