import Vuex from 'vuex'
import Vue from 'vue'
import test_house from './modules/test_house'
import users from './modules/users'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
Vue.use(Vuex)


export default new Vuex.Store({
    plugins: [
        createPersistedState()
    ],
    modules: {
        test_house,
        users,
    },
})