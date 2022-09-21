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
            <li>欢迎gqg
                <a-icon type="down" />
            </li>
            <li>退出</li>
        </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  methods: {
    ...mapActions(['changCollapsed']),
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