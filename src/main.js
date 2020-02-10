// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './axios'
import router from './router'

import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


/* require('./mock/mock.js') */
import TopSidebar from './components/sidebar/TopSidebar'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('top-sidebar',TopSidebar)
var vue = new Vue({
  el: '#app',
	router,
	store,
  components: { App },
  template: '<App/>'
})

export {vue}
