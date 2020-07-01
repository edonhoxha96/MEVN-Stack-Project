import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        admin:{}
    },
    mutations:{
        SET_ADMIN(state, admin){
            state.admin = admin
            window.localStorage.currentAdmin = JSON.stringify(admin)
        },
        LOGOUT_ADMIN(state){
            state.admin = {}
            window.localStorage.currentAdmin = JSON.stringify()
        }
    },
    actions:{
        async loginAdmin({commit}, admin){
            commit('SET_ADMIN', admin)
        },
        logoutAdmin({commit}){
            commit('LOGOUT_ADMIN')
        },
        loadCurrentAdmin({commit}){
            let admin = JSON.parse(window.localStorage.currentAdmin)
            commit('SET_ADMIN', admin)
        }
    }
})