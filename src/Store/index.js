import {createStore} from 'vuex'

const store = createStore({
    state: {
        isLoggedIn: false,
        authUser: {},
        isLoginOpen: false,
        count:0
    },
    mutations: {
        increment(state, n) {
            state.count += n;
        },
        decrement(state, n) {
            state.count -= n;
        },
        setIsLoggedIn(state, payload) {
            state.isLoggedIn = payload;
        },
        setAuthUser(state, payload) {
            state.authUser = payload;
        },
        setLoginModal(state, payload) {
            state.isLoginOpen = payload;
        }
    },
    actions: {
        increment({commit}, data) {
            commit('increment', data)
        },
        decrement({commit}, data) {
            commit('decrement', data)
        },
    }
})

export default store;