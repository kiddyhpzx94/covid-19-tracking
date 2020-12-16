// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Vuex from 'vuex';
import { store } from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'

window.axios = axios;

Vue.use(Vuex);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
