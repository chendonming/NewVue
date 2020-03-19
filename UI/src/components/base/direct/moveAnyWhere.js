import Vue from 'vue';

Vue.directive('moveAnyWhere', {
  bind(el, binding) {
    console.log(el, binding);
  },
});
