import Vue from'vue'
import VueRouter from 'vue-router'

import Dashboard from './components/pages/Dashboard'
import Profile from './components/pages/Profile'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
     {
         path: '/dashboard',
         component: Dashboard
     },
     {
        path: '/profile',
        component: Profile
    }

    ]
})
export default router