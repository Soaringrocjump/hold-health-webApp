// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios';

//ElementUI
import { Tooltip, Upload } from 'element-ui';
Vue.use(Tooltip)
Vue.use(Upload)
//VantUI
import { Cell, Popup, Area, Dialog, Loading, Pagination, Toast } from 'vant';
Vue.use(Cell);
Vue.use(Popup);
Vue.use(Area);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Pagination);
Vue.use(Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
