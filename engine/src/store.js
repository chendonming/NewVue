/* eslint-disable no-shadow,no-plusplus */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  count: 0,
  attribute: {},
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  setattribute(state, attr) {
    state.attribute = attr;
  },
};

const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
  getattr: (state) => state.attribute,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
