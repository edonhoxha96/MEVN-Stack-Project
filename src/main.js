import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueAxios from 'vue-axios'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios,axios);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isLoggedIn) {
      if(to.matched.some(record => record.meta.role == store.getters.hasRole)) { 
        next()
        return
      }
    }
    if(to.matched.some(record => record.meta.role == 3)){
      next({
        name: 'login',
        params: {nextUrl: to.fullPath}
      }) 
    }else{
      next({
        name: 'loginUser',
        params: {nextUrl: to.fullPath}
      })
    }
  } else {
    next() 
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')