import CPopup from './components/base/CPopup';
import CForm from './components/CForm';
import CTable from './components/CTable';

const components = {
  install(vue) {
    vue.component('CPopup', CPopup);
    vue.component('CForm', CForm);
    vue.component('CTable', CTable);
  },
};


export default components;
