import Vue from 'vue';
import { Dialog, Button } from 'element-ui';
import App from './App.vue';
import router from './router';

Vue.component(Dialog.name, Dialog);
Vue.component(Button.name, Button);


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
