import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    INCREMENT(state) {
      state.counter += 1;
    },
  },
  actions: {
  },
  modules: {
  },
});
