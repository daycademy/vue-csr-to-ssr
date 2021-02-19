import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// eslint-disable-next-line
export default (context) => {
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });

  return { app, router, store };
};
