import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret, faSpinner, faCheck, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCountdown from '@chenfengyuan/vue-countdown';

library.add(faUserSecret, faSpinner, faCheck, faArrowDown)

Vue.component('fa-icon', FontAwesomeIcon);
Vue.component(VueCountdown.name, VueCountdown);