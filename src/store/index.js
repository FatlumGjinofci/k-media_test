import Vuex from 'vuex';
import Vue from 'vue';
import auth from './auth/auth'
Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        auth
    }
})
