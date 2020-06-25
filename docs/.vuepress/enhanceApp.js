import * as ffui from '../../src'
import Vue from 'vue'
import './styles/app.scss';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight, faSquare, faCheck, faCheckSquare, faChessQueen, faCircle, faCoffee, faCog, faEdit, faTimes, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import VueDummy from "vue-dummy"
import i18n from './i18n'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  /* This allows i18n to work within Vuepress */

  if (typeof window !== "undefined") {
    const Inputmask =  require('inputmask')

    Inputmask.extendAliases({
      'mysqldate': {
        regex: "([0-9]{4})-(0[1-9]|1[012]|00)-(0[1-9]|[12][0-9]|3[01]|00)",
      },
      'ffdate': {
        regex: "(0[1-9]|[12][0-9]|3[01]|--)/(0[1-9]|1[012]|--)/([0-9]{4})",
      },
      'ffdate_no_unknowns': {
        regex: "(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/([0-9]{4})",
      },
      'ffdate_ja': {
        regex: '([0-9]{4})年(0[1-9]|1[012]|--)月(0[1-9]|[12][0-9]|3[01]|--)日',
      },
      'ffdate_ja_no_unknowns': {
        regex: '([0-9]{4})年(0[1-9]|1[012])月(0[1-9]|[12][0-9]|3[01])日',
      }
    });
  }
  Object.assign(options, { i18n })
  Vue.use(ffui)
  Vue.use(VueDummy)
  library.add(faArrowCircleRight, faSquare, faCheck, faCheckSquare, faCircle, faCoffee, faCog, faEdit, faTimes, faChessQueen, faSearch, faSpinner)
  Vue.component('fa', FontAwesomeIcon)
  Vue.component('fa-layers', FontAwesomeLayers)
  Vue.component('fa-layers-text', FontAwesomeLayersText)
}