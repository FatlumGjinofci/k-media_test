import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard/Dashboard';
import AddCompany from '../components/company/Add';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresGuest: true            
            }
        },
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/add',
            name: 'add',
            component: AddCompany,
            meta: {
                requiresAuth: true,
            }
        }
    ]
})