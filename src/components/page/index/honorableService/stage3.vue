<!-- 提升 -->
<template>
  <div class="honorableService" >
    <Top title="提升" :viewScrollTop="viewScrollTop" :hasTopBg="hasBg"/>
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
          path: require('@/assets/img/service/adc1.png')
        },
        {
          path: require('@/assets/img/service/adc2.png')
        },
        {
          path: require('@/assets/img/service/adc3.png')
        },
        {
          path: require('@/assets/img/service/adc4.png')
        },
        {
          path: require('@/assets/img/service/adc5.png')
        },
        {
          path: require('@/assets/img/service/adc6.png')
        },
        {
          path: require('@/assets/img/service/adc7.png')
        },
        {
          path: require('@/assets/img/service/adc8.png')
        },
        {
          path: require('@/assets/img/service/adc9.png')
        },
        {
          path: require('@/assets/img/service/adc10.png')
        },
        {
          path: require('@/assets/img/service/adc11.png')
        },
        {
          path: require('@/assets/img/service/adc12.png')
        },
        {
          path: require('@/assets/img/service/adc13.png')
        },
        {
          path: require('@/assets/img/service/adc14.png')
        },
        {
          path: require('@/assets/img/service/adc15.png')
        },
        {
          path: require('@/assets/img/service/adc16.png')
        },
        {
          path: require('@/assets/img/service/adc17.png')
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