<!-- 邀约模块 -->
<template>
  <div class="invitation-page">
    <Top2List title="健康预约"/>
    <router-view/>
  </div>
</template>

<script>
import Top2List from './module/Top2List'
export default {
  data () {
    return {
    };
  },
  components:{
    Top2List
  }
}

</script>

<style lang='scss'>
@import "@/assets/style/invitation.scss";
</style>