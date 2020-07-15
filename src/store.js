import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:{},
        products:[],
        cartProducts: [],
        currentProduct: {},
        showModal: false,
        showPopupCart: false,
    },
    mutations:{
        SET_USER(state, user){
            state.user = user
            window.localStorage.currentUser = JSON.stringify(user)
        },
        SET_PRODUCTS(state, products){
            state.products = products
        },
        ADD_STOCK(state, id){
            var objIndex = state.products.findIndex(obj => obj.id = id)
             state.products[objIndex].stock += 1
        },
        REMOVE_STOCK(state, id){
            var objIndex = state.products.findIndex(obj => obj.id = id)
            state.products[objIndex].stock -= 1
        },
        LOGOUT_USER(state){
            state.user = {}
            window.localStorage.currentUser = JSON.stringify()
        },
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push(product);
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
    },
    actions:{
        async loginUser({commit}, user){
            commit('SET_USER', user)
        },
        logoutUser({commit}){
            commit('LOGOUT_USER')
        },
        async loadCurrentUser({commit}){
            let user = JSON.parse(window.localStorage.currentUser)
            commit('SET_USER', user)
        },
        async loadProducts({commit}){
            await axios.get(`http://localhost:3000/emall/api/products`)
            .then(response => {
              let products = response.data;
              commit('SET_PRODUCTS', products)
            })
            .catch(err => {
                console.log(err)
            })
        },
        addStock: ({commit}, id) => {
            commit('ADD_STOCK',id)
        },
        removeStock: ({commit}, id) => {
            commit('REMOVE_STOCK',id)
        },
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: async (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        },
    },
    getters: {
        isLoggedIn: state => {
            return !(state.user.firstName == undefined);
        },
        hasRole: state => {
            return state.user.RoleId
        },
        getProductsInCart: state => state.cartProducts,
        getCurrentProduct: state => state.currentProduct,
        getShowModal: state => state.showModal,
        getPopupCart: state => state.showPopupCart,
        getUserId: state => state.user.id,
    },
    plugins: [createPersistedState()]
})