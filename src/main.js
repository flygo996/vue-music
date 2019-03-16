import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import * as filters from './utils/filter'
import './fonts/iconfont.js'
import './scss/index.scss'
import './components/global/index.js'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('@/assets/logo.png')
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
