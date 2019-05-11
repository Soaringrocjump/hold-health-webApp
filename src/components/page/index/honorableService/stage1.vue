<!-- 基础 -->
<template>
  <div class="honorableService" ref="viewBox">
    <Top title="基础" :hasTopBg="hasBg"/>
    <img src="~IMG/service/ada1.png" alt="">
    <img src="~IMG/service/ada2.png" alt="">
    <img src="~IMG/service/ada3.png" alt="">
    <img src="~IMG/service/ada4.png" alt="">
    <img src="~IMG/service/ada5.png" alt="">
    <img src="~IMG/service/ada6.png" alt="">
    <img src="~IMG/service/ada7.png" alt="">
    <img src="~IMG/service/ada8.png" alt="">
    <img src="~IMG/service/ada9.png" alt="">
  </div>
</template>

<script>
import Top from './Top'
export default {
  data () {
    return {
      hasBg: false
    };
  },
  components:{
    Top
  },
  mounted(){
    this.box = this.$refs.viewBox
    this.box.addEventListener('scroll', () => {
    console.log(" scroll " + this.$refs.viewBox.scrollTop)
    //以下是我自己的需求，向下滚动的时候显示“我是有底线的（类似支付宝）”
    // this.isScroll=this.$refs.viewBox.scrollTop>0
    console.log("aaa")
    this.hasBg = true
    }, false)
  }
}

</script>
<style lang='scss' scoped>
.honorableService{
  width: 750px;
}
</style>