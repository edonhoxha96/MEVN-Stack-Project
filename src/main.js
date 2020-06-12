import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes
});

// Vue.component('footer', {
//   template: '#footer',
//   data(){
//     return{
//     }
//   }
// }) 
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')