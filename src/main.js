import Vue from 'vue'
import vuex from 'vuex'
import router from './router'
import App from './App.vue'
import './plugins/ant-design-vue'
import "@/assets/css/reset.less"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
