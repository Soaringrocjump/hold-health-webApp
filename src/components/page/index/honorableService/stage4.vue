<!-- 特色 -->
<template>
  <div class="honorableService" >
    <Top title="特色" :viewScrollTop="viewScrollTop" :hasTopBg="hasBg"/>
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
          path: require('@/assets/img/service/add1.png')
        },
        {
          path: require('@/assets/img/service/add2.png')
        },
        {
          path: require('@/assets/img/service/add3.png')
        },
        {
          path: require('@/assets/img/service/add4.png')
        },
        {
          path: require('@/assets/img/service/add5.png')
        },
        {
          path: require('@/assets/img/service/add6.png')
        },
        {
          path: require('@/assets/img/service/add7.png')
        }
      ]
    };
  },
  components:{
    Top
  },
  mounted(){
  }
}

</script>
<style lang='scss' scoped>
.honorableService{
  width: 750px;
}
</style>