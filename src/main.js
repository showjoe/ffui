
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap';
Vue.config.productionTip = false
const $ = require('jquery')
const moment = require('moment')
window.$ = $
window.moment = moment
// require('tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js')

const VueInputMask = require('vue-inputmask').default
Vue.use(VueInputMask)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
