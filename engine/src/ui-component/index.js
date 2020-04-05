import CSelect from '@/ui-component/CSelect';
import CPopup from '@/ui-component/base/CPopup';
import CTable from '@/ui-component/CTable';
import CForm from '@/ui-component/CForm';

const component = {
  install(vue) {
    vue.component('CForm', CForm);
    vue.component('CTable', CTable);
    vue.component('CPopup', CPopup);
    vue.component('CSelect', CSelect);
  },
};

export default component;
