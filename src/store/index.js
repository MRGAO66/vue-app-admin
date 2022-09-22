import Vue from "vue";
import Vuex from "vuex";
import cookies from "@/utils/userCookie"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        collapsed: false,
        //用户信息
        userInfo: cookies.getCookie()
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
        }
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
            commit('login');
            cookies.removeCookie();
        }
    },
    modules: {

    },
});