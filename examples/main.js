import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Element from '../packages/index'
import routes from './route.config'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import './assets/style/reset.css'

Vue.use(Element)
Vue.use(VueRouter)
Vue.component('side-nav', SideNav)
Vue.component('main-header', MainHeader)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes,
})

new Vue({
  ...App,
  router,
}).$mount('#app')
