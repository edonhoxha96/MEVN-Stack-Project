import Login from './components/Login.vue';
import HomePage from './components/HomePage.vue';
import About from './components/About.vue';
import Register from './components/Register.vue';

export const routes = [
   { path: '/', name: 'home', component: HomePage },
   { path: '/login', name: 'login', component: Login },
   { path: '/register', name: 'register', component: Register },
   { path: '/about', component: About },
]