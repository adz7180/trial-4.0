import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Customization from '@/views/Customization.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/customize', name: 'Customization', component: Customization }
  ]
});