<template>
  <div id="app">
    <keep-alive>
      <transition :name="'slide-' + (direction == 'forward' ? 'in' : 'out')">
      <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      direction: state => state.direction,
    })
  },
}
</script>

<style lang="scss">
@import "@/assets/style/common.scss";
</style>
<style>
@import "./assets/font/iconfont.css";
</style>
