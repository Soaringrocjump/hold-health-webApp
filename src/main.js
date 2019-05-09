// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import store from './store'
import * as filters from './filters' // 全局过滤文件
import Bridge from './config/bridge.js'

Vue.prototype.$bridge = Bridge

//ElementUI
import { DatePicker,Table } from 'element-ui';
Vue.use(DatePicker)
Vue.use(Table)
//VantUI
import { Tab, Tabs, Popup, Loading, DatetimePicker, Area, Picker, RadioGroup, Radio, Icon, Toast } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(Loading);
Vue.use(DatetimePicker);
Vue.use(Area);
Vue.use(Picker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Icon);
Vue.use(Toast);

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
// simple history management
const history = window.sessionStorage;
let historyCount = history.getItem('count') * 1;
router.beforeEach(function (to, from, next) {

  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1];
    window.location.href = `http${url}`
  } else {
    next()
  }
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
