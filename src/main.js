import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from "./store.js";

import "./assets/styles/all.scss";

//Zoom image
import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}); 

