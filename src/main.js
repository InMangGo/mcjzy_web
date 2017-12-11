import util from '@/config/util'
import Http from '@/config/http'
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import filter from '@/config/filter'
import App from '@/views/layouts/app.vue'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'font-awesome/scss/font-awesome.scss'
import 'element-ui/lib/theme-chalk/index.css'
import '@css/app.scss'

Vue.use(ElementUI)
Vue.prototype.$http = Http
Vue.prototype.$util = util

Object.keys(filter).forEach((key, index, arr) => {
  Vue.filter(key, filter[key])
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
