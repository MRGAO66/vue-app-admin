import Vue from "vue";
import Vuex from "vuex";
import cookies from "@/utils/userCookie"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        collapsed: false,
        //用户信息
        userInfo: cookies.getCookie(),
        //存储菜单的路由
        menuRoutes: [],
    },
    mutations: {
        changCollapsed(state) {
            state.collapsed = !state.collapsed
        },
        setUserInfo(state,userinfo) {
            state.userInfo = userinfo
        },
        logout(state) {
            state.userInfo = {
                username: '',
                appkey: '',
                role: '',
                email: ''
            }
        },
        changeMenuRoutes(state, routes) {
            state.menuRoutes = routes;
        },
    },
    actions: {
        changCollapsed({commit}) {
            commit('changCollapsed');
        },
        getUserInfo({commit}, userinfo) {
            cookies.setCookie(userinfo);
            commit('setUserInfo',userinfo);
        },
        logout({commit}) {
            commit('logout');
            cookies.removeCookie();
        },
        changeMenuRoutes({commit}, routes) {
            commit('changeMenuRoutes', routes);
        }
    },
    modules: {

    },
});