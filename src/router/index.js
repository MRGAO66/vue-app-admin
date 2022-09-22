import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/layout/Home.vue";
import Login from "../views/layout/Login.vue"
import store from "../store/index"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: "Login",
        component: Login
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})

router.beforeEach(function(to,from, next) {
    if (to.path !== '/login') {
        if (store.state.userInfo.appkey && store.state.userInfo.username && store.state.userInfo.role) {
            return next();
        }
        return next('/login');
    }
    return next();
});

export default router;