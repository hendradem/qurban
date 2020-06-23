import Vue from 'vue'

// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// font awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret, faSpinner, faCheck, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCountdown from '@chenfengyuan/vue-countdown';


// adding the library

library.add(faUserSecret, faSpinner, faCheck, faArrowDown)
Vue.component('fa-icon', FontAwesomeIcon);
Vue.component(VueCountdown.name, VueCountdown);


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)