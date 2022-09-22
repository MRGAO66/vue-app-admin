<template>
  <div class="main-header">
        <a-button
          type="primary"
          style="margin-bottom: 16px"
          @click="changCollapsed"
        >
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <div class="breadcrumb">
            <a-breadcrumb>
                <a-breadcrumb-item>首页</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <div class="user-info">
            <li>
                {{ this.$store.state.userInfo.username }}
                <a-icon type="down" />
            </li>
            <li @click="logout">退出</li>
        </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  methods: {
    ...mapActions(['changCollapsed']),
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({
        name:'Login',
      });
    }
  },
  computed: {
      ...mapState({
        collapsed: (state) => state.collapsed
    })
  }
}
</script>

<style>

</style>