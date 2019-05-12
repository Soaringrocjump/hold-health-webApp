<!-- 进阶 -->
<template>
  <div class="honorableService" >
    <Top title="进阶" :viewScrollTop="viewScrollTop" :hasTopBg="hasBg"/>
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
          path: require('@/assets/img/service/adb1.png')
        },
        {
          path: require('@/assets/img/service/adb2.png')
        },
        {
          path: require('@/assets/img/service/adb3.png')
        },
        {
          path: require('@/assets/img/service/adb4.png')
        },
        {
          path: require('@/assets/img/service/adb5.png')
        },
        {
          path: require('@/assets/img/service/adb6.png')
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