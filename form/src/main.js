import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import router from './router'
import * as VeeValidate from 'vee-validate'

window.$ = window.jQuery = jQuery;

import 'popper.js';
import'bootstrap';
import './assets/app.scss';

Vue.config.productionTip = false
Vue.use(VeeValidate);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
