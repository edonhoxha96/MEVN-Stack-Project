import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:{},
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
        loadCurrentUser({commit}){
            let user = JSON.parse(window.localStorage.currentUser)
            commit('SET_USER', user)
        },
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, index) => {
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
        hasRole: state =>{
            return state.user.RoleId
        },
        getProductsInCart: state => state.cartProducts,
        getCurrentProduct: state => state.currentProduct,
        getShowModal: state => state.showModal,
        getPopupCart: state => state.showPopupCart,
        getUserId: state => state.user.id
    }
})