import Vue from 'vue';
import {
  Dialog, Button, Form, FormItem, Select, Option, Input, Table, Pagination, TableColumn,
} from 'element-ui';
import i18n from '@/i18n/i18n';
import App from './App.vue';
import router from './router';

Vue.component(Dialog.name, Dialog);
Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);
Vue.component(Table.name, Table);
Vue.component(Pagination.name, Pagination);
Vue.component(TableColumn.name, TableColumn);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
