import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faSquare, faCheckSquare, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import 'bootstrap';
import * as ffui from './'
const moment = require('moment')
window.moment = moment
Vue.config.productionTip = false
Vue.use(ffui)

Vue.component('fa', FontAwesomeIcon)
library.add(faSquare, faCheckSquare, faCertificate)

import './assets/scss/app.scss';
import router from './router'
import i18n from './i18n'
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')