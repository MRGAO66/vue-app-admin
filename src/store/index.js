import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        collapsed: false,
    },
    mutations: {
        changCollapsed(state) {
            state.collapsed = !state.collapsed
        }
    },
    actions: {
        changCollapsed({commit}) {
            commit('changCollapsed');
        }
    },
    modules: {

    },
});