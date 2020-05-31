import Login from './components/Login.vue';
import HomePage from './components/HomePage.vue';
import About from './components/About.vue';

export const routes = [
   { path: '/', name: 'home', component: HomePage },
   { path: '/login', name: 'login', component: Login },
   { path: '/about', component: About },
]