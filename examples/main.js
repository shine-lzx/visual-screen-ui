import Vue from 'vue'
import Border from '../packages/border'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')

Vue.use(Border)
