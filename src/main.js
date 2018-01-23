// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import store from './store';

import 'common/less/index.less';

// 300ms延迟
fastclick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
