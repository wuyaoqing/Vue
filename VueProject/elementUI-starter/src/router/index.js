import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Template from '../pages/Template.vue'
import Layout from '../pages/Layout.vue'
import Container from '../pages/Container.vue'
import Container2 from '../pages/Container2.vue'
import ContainerUser from '../pages/ContainerUser.vue'
import Icon from '../pages/Icon.vue'
import Button from '../pages/Button.vue'
import Link from '../pages/Link.vue'
import Form from '../pages/Form.vue'
import Data from '../pages/Data.vue'
import Tree from '../pages/Tree.vue'
import Notice from '../pages/Notice.vue'
import Navigation from '../pages/Navigation.vue'
import Others from '../pages/Others.vue'
import tabZujian from '../pages/tabZujian.vue'
import TreeSelect from '../pages/TreeSelect.vue'
import TreeSelect2 from '../pages/TreeSelect2.vue'
import Select from '../pages/Select.vue'
import Request from '../pages/Request.vue'
import Dialog from '../pages/Dialog.vue'
import Card from '../pages/Card.vue'
import DataImport from '../pages/DataImport.vue'
 
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: Home
  },
  {
    path: '/DataImport',
    name: 'DataImport',
    component: DataImport
  },
 {
   path: '/Card',
   name: 'Card',
   component: Card
 },
  {
    path: '/TreeSelect',
    name: 'TreeSelect',
    component: TreeSelect
  },
  {
    path: '/TreeSelect2',
    name: 'TreeSelect2',
    component: TreeSelect2
  },
  {
    path: '/Template',
    name: '模板',
    component: Template
  },
  {
    path: '/tabZujian',
    name: 'tabZujian',
    component: tabZujian
  },
  {
	 path: '/Layout',
	 name: '布局', 
	 component:Layout
  },
  {
  	 path: '/Container',
  	 name: '容器1', 
  	 component:Container
  },
  {
  	 path: '/Container2',
  	 name: '容器2', 
  	 component:Container2
  },
  {
  	 path: '/ContainerUser',
  	 name: '容器4', 
  	 component:ContainerUser
  },
  {
  	 path: '/Icon',
  	 name: '图标', 
  	 component:Icon
  },
  {
  	 path: '/Button',
  	 name: '按钮', 
  	 component:Button
  },
  {
  	 path: '/Link',
  	 name: '链接', 
  	 component:Link
  },
  {
  	 path: '/Form',
  	 name: '表单', 
  	 component:Form
  },
  {
  	 path: '/Data',
  	 name: '数据', 
  	 component:Data
  },
  {
  	 path: '/Tree',
  	 name: '树形', 
  	 component:Tree
  },
  {
  	 path: '/Notice',
  	 name: '提示', 
  	 component:Notice
  },
  {
  	 path: '/Navigation',
  	 name: '导航', 
  	 component:Navigation
  },
  {
  	 path: '/Others',
  	 name: '其他', 
  	 component:Others
  },
  {
  	 path: '/Select',
  	 name: '选择框', 
	 component: Select
  },
  {
  	 path: '/Request',
  	 name: '请求', 
	 component: Request
  },
  {
    path: '/Dialog',
    name: 'Dialog',
    component: Dialog
  }
]

const router = new VueRouter({
  mode:'history',//不加url有#
  routes
})

export default router
