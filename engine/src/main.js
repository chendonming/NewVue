import Vue from 'vue';
import ElementUi from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/iconfont/iconfont.css';

Vue.use(ElementUi);
Vue.config.productionTip = false;

Vue.prototype.isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
