import Vue from 'vue'

// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VuejsDatatableFactory } from 'vuejs-datatable';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// font awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// countDown
import VueCountdown from '@chenfengyuan/vue-countdown';

// vue datatable
Vue.use( VuejsDatatableFactory );


// adding the library

// library.add(faUserSecret, faSpinner, faCheck, faArrowDown, faCheckCircle, faHeart)
// Vue.component('fa-icon', FontAwesomeIcon);
Vue.component(VueCountdown.name, VueCountdown);


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)