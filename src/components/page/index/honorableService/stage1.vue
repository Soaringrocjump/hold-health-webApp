<!-- 基础 -->
<template>
  <div class="honorableService" >
    <Top title="基础" :viewScrollTop="viewScrollTop" :hasTopBg="hasBg"/>
    <img v-for="(img,index) in imageList" :key="index" v-lazy="img.path" >
  </div>
</template>

<script>
import Top from './Top'
export default {
  data () {
    return {
      hasBg: false,
      viewScrollTop: '',
      imageList: [
        {
          path: require('@/assets/img/service/ada1.png')
        },
        {
          path: require('@/assets/img/service/ada2.png')
        },
        {
          path: require('@/assets/img/service/ada3.png')
        },
        {
          path: require('@/assets/img/service/ada4.png')
        },
        {
          path: require('@/assets/img/service/ada5.png')
        },
        {
          path: require('@/assets/img/service/ada6.png')
        },
        {
          path: require('@/assets/img/service/ada7.png')
        },
        {
          path: require('@/assets/img/service/ada8.png')
        },
        {
          path: require('@/assets/img/service/ada9.png')
        },
      ]
    };
  },
  components:{
    Top
  },
  watch:{
    hasBg(val){
      console.log('watch',document.documentElement.scrollTop)
    }
  },
  mounted(){
    let hasBg = this.hasBg
    let viewScrollTop = this.viewScrollTop
    this.hasBg = window.addEventListener('scroll', function(){
        console.log('scrolling',document.documentElement.scrollTop);
        viewScrollTop = document.documentElement.scrollTop
        console.log('viewScrollTop',viewScrollTop)
        
        // console.log('data',hasBg)
        if(document.documentElement.scrollTop > 100){
          console.log('加背景')
          return true
        }
    })
  }
}

</script>
<style lang='scss' scoped>
.honorableService{
  width: 750px;
}
</style>