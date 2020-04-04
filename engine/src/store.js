/* eslint-disable no-shadow,no-plusplus */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  count: 0,
  attribute: {},
  list: [], // wrapper中的list
  currentIndex: null,
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
  setAttributeByIndex(state, { index, info }) {
    Vue.set(state.attribute[index], 'default', info);
  },
  setList(state, { index, info, key }) {
    Vue.set(state.list[index].prop, key || 'value', info);
  },
  setAllList(state, list) {
    state.list = list;
  },
  setIndex(state, index) {
    state.currentIndex = index;
  },
};

const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
  getList: (state) => state.list,
  getattr: (state) => {
    // state.attribute
    const newObj = JSON.parse(JSON.stringify(state.attribute));
    for (const [key, values] of Object.entries(newObj)) {
      if (values.type === 'bool') {
        if (values.default) {
          newObj[key].default = '1';
        } else {
          newObj[key].default = '0';
        }
      }
    }

    return newObj;
  },
  getIndex: (state) => state.currentIndex,
};

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  mutations,
});
