<!-- 邀约模块 -->
<template>
  <div class="invitation-page">
    <Top3List title="发布邀约"/>
    <transition :name="'slide-' + (direction == 'forward' ? 'in' : 'out')">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Top3List from './module/Top3List'
export default {
  data () {
    return {
    };
  },
  computed:{
    ...mapState({
      direction: state => state.direction,
    })
  },
  components:{
    Top3List
  }
}

</script>

<style lang='scss'>
@import "@/assets/style/invitation.scss";
</style>