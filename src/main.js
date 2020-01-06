import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import WelcomePage from './components/WelcomePage'
import DashBoard from './components/DashBoard'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import TestHouse from './components/TestHouse'
import DevicesBoard from './components/DevicesBoard'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ProfilePage from './components/ProfilePage'
import Rooms from './components/Rooms'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [{
        path: '/',
        component: WelcomePage,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard,
        meta: { requiresAuth: true }
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
    },
    {
        path: '/room/:id',
        name: 'room',
        component: DevicesBoard,
        props: true,
        // meta: { requiresAuth: true }
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn,
    },
    {
        path: '/testhouse',
        name: 'test-house',
        component: TestHouse,
        //meta: { requiresAuth: true }
    },
    {
        path: '/profilepage',
        name: 'profilepage',
        component: ProfilePage,
        //meta: { requiresAuth: true }
    },

    {
        path: '/rooms',
        name: 'rooms',
        component: Rooms,
        //meta: { requiresAuth: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         //check if user is authenticated
//     }
//     //allow page to load
//     else {
//         next()
//     }
// })

new Vue({
        el: '#app',
        store,
        vuetify,
        router,
        render: h => h(App),
        created() {
            firebase.initializeApp({
                apiKey: 'AIzaSyAoy1FfnccHWOao0nTF1ng3yLc7UQIAUZc',
                authDomain: 'smarthouseweb-dbf75.firebaseapp.com',
                databaseURL: 'https://smarthouseweb-dbf75.firebaseio.com',
                projectId: 'smarthouseweb-dbf75',
                storageBucket: ''
            })
        }
    })
    //.$mount('#app')