<template>
  <div class="home">
    <left-menu></left-menu>
    <div :class="{ 'main-app': true, 'meun-unfold': collapsed }">
    <silder-nav></silder-nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import leftMenu from "../../components/menu.vue";
import silderNav from "../../components/sliderNav.vue";

export default {
  components: {
      leftMenu,
      silderNav
  },
  computed: {
      ...mapState({
          collapsed: (state) => state.collapsed
      })
  }
  
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
