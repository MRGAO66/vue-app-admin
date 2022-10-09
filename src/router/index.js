import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/layout/Home.vue";
import Login from "../views/layout/Login.vue";
import store from "../store/index";
import getMenuRoutes from "@/utils/permission"

Vue.use(VueRouter);

const ayncRouterMap = [{
    path: '/product',
    name: 'Product',
    meta: {
        title: '商品',
    },
    component: Home,
    children: [{
        path: 'list',
        name: 'ProductList',
        meta: {
            title: '商品列表'
        },
        component: () => import('@/views/page/productList.vue'),
    }, {
        path: 'add',
        name: 'ProductAdd',
        meta: {
            title:'添加商品',
        },
        component: () => import('@/views/page/productAdd.vue'),
    }, {
        path: 'category',
        name: 'Category',
        meta: {
            title: '类目管理',
        },
        component: () => import('@/views/page/category.vue')
    }]
}]

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页',
        },
        children: [{
            path: 'index',
            name: 'Index',
            meta: {
                title: '统计',
            },
            component: () => import('../views/page/index.vue')
        }]
    },
    {
        path: '/login',
        name: "Login",
        component: Login,
        meta: {
            title: '登录'
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})
let isAddRoutes = false;
router.beforeEach(function(to,from, next) {
    console.log(store.state.userInfo);
    if (to.path !== '/login') {
        if (store.state.userInfo.appkey && store.state.userInfo.username && store.state.userInfo.role) {
            if (!isAddRoutes) {
                const menuRoutes = getMenuRoutes(store.state.userInfo.role, ayncRouterMap);
                router.addRoutes(menuRoutes);
                store.dispatch('changeMenuRoutes', routes.concat(menuRoutes));
                isAddRoutes = true;
            }
            return next();
        }
        return next('/login');
    }
    return next();
});

export default router;