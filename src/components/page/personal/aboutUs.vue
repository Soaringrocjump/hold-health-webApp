<!-- 关于我们 -->
<template>
  <div class="aboutUs">
    <TopBg>
      <PersonTop title="关于我们" hasBack/>
    </TopBg>
    <img v-for="(img,index) in imageList" :key="index" v-lazy="img.path">
  </div>
</template>

<script>
import PersonTop from 'Module/PersonTop'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      imageList: [
        {
          path: require('@/assets/img/about1.png')
        },
        {
          path: require('@/assets/img/about2.png')
        },
        {
          path: require('@/assets/img/about3.png')
        },
        {
          path: require('@/assets/img/about4.png')
        }
      ]
    };
  },
  components:{
    PersonTop,
    TopBg
  },
}

</script>
<style lang='scss' scoped>
.aboutUs{
  position: relative;
  width: 750px;
}
</style>