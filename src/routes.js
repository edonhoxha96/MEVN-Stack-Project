import Login from './components/Login.vue';
import HomePage from './components/HomePage.vue';
import About from './components/About.vue';
import Register from './components/Register.vue';
import Politikat from './components/Politikat';
import Kushtet from './components/Kushtet';
import Content from './components/Content';
import AddCategory from './components/addCategory';
import Product from './components/Product';
import AddProduct from './components/AddProduct';
import AddStore from './components/AddStore';
import AddAdmin from './components/AddAdmin';
import AdminPage from './components/AdminPage';
import AdminLogin from './components/AdminLogin';
import AddStoreKeeper from './components/AddStoreKeeper';
// import ProductPage from './components/ProductPage.html';
// import ProductDetail from './components/ProductDetail'

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
   { path: '/addProduct', component: AddProduct},
   { path: '/addStore', component: AddStore},
   { path: '/addAdmin', component: AddAdmin},
   { path: '/adminPage', name:'adminPage' ,component: AdminPage},
   { path: '/adminLogin',name: 'loginAdmin', component: AdminLogin},
   { path: '/addStoreKeeper', component: AddStoreKeeper},
   // { path: '/productdetail', component: ProductDetail},
   // { path: '/productpage', component: ProductPage},
]