import Vue from 'vue';
import App from './App.vue';

// eslint-disable-next-line
export default (context) => {
  const app = new Vue(App);

  return { app };
};
