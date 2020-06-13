import Login from './components/Login.vue';
import HomePage from './components/HomePage.vue';
import About from './components/About.vue';
import Register from './components/Register.vue';
import Politikat from './components/Politikat';
import Kushtet from './components/Kushtet';
import Content from './components/Content';
import AddCategory from './components/addCategory';
import Product from './components/Product';
// import ProductPage from './components/ProductPage.html';
import ProductDetail from './components/ProductDetail'

export const routes = [
   { path: '/', name: 'home', component: HomePage },
   { path: '/login', name: 'login', component: Login },
   { path: '/register', name: 'register', component: Register },
   { path: '/politikat', name: 'politikat', component: Politikat },
   { path: '/kushtet', name: 'kushtet', component: Kushtet },
   { path: '/content', name: 'content', component: Content },
   { path: '/about', component: About },
   { path: '/addCategory', component: AddCategory},
   { path: '/product', component: Product},
   { path: '/productdetail', component: ProductDetail},
   // { path: '/productpage', component: ProductPage},
]