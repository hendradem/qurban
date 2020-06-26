import Vue from 'vue'

// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// font awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// countDown
import VueCountdown from '@chenfengyuan/vue-countdown';


// adding the library

// library.add(faUserSecret, faSpinner, faCheck, faArrowDown, faCheckCircle, faHeart)
// Vue.component('fa-icon', FontAwesomeIcon);
Vue.component(VueCountdown.name, VueCountdown);


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)