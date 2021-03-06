import Vue from 'vue';
import i18n from '@/i18n/i18n';
import ElementUi from 'element-ui';
import ui from '@/ui-component';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/iconfont/iconfont.css';

Vue.use(ElementUi);
Vue.use(ui);
Vue.config.productionTip = false;

Vue.prototype.isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]';

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
