import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import './fonts/iconfont.js'
import './scss/index.scss'
import './components/global/index.js'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('@/assets/logo.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
