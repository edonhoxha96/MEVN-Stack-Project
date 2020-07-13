import HomePage from './components/HomePage.vue';
import About from './components/About.vue';
import AddCategory from './components/AddCategory';
import AddProduct from './components/AddProduct';
import AddStore from './components/AddStore';
import AddUser from './components/AddUser';
import AdminPage from './components/AdminPage';
import UserLogin from './components/UserLogin';
import StoreKeeperPage from './components/StoreKeeperPage';
import EditProduct from './components/EditProduct';
import Register from './components/Register';
import Login from './components/Login';
import Order from './components/Order';
import Products from './components/Products';
import CartCheckout from './components/CartCheckout'
import ProductDetail from './components/ProductDetail'
import Payment from './components/Payment'


export const routes = [
    { path:'/', name:'home', component: HomePage},
    { path: '/about', component: About},
    { path: '/addCategory', component: AddCategory, meta: {requiresAuth: true, role: 1}},
    { path: '/addProduct', component: AddProduct, meta: {requiresAuth: true, role: 2}},
    { path: '/addStore', component: AddStore, meta: {requiresAuth: true, role: 1}},
    { path: '/addUser', component: AddUser, meta: {requiresAuth: true, role: 1}},
    { path: '/adminPage', name:'adminPage' ,component: AdminPage, meta: {requiresAuth: true, role: 1}},
    { path: '/userLogin',name: 'loginUser', component: UserLogin},
    { path: '/storeKeeperPage',name: 'skPage' , component: StoreKeeperPage, meta: {requiresAuth: true, role: 2}},
    { path: '/editProduct',name: 'editproduct' , component: EditProduct, meta: {requiresAuth: true, role: 2}},
    { path: '/register', name:'register', component: Register},
    { path: '/login', name:'login', component: Login},
    { path: '/order', name:'order', component: Order, meta: {requiresAuth: true, role: 3}},
    { path: '/products', name:'products', component: Products},
    { path: '/cart-checkout', name:'cart-checkout', component: CartCheckout},
    { path: '/product-details', name:'product-details', component: ProductDetail},
    { path: '/payment', name:'payment', component: Payment},

]