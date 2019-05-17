<!-- 健康在手 -->
<template>
  <div class="advert-page">
    <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
    <img v-for="(img,index) in imageList" :key="index" :src="img.path" >
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: [
        {
          path: require('@/assets/img/hold-health1.png')
        },
        {
          path: require('@/assets/img/hold-health2.png')
        },
        {
          path: require('@/assets/img/hold-health3.png')
        },
        {
          path: require('@/assets/img/hold-health4.png')
        }
      ]
    };
  },
}

</script>
<style lang='scss' scoped>
.advert-page{
  position: relative;
  width: 750px;
  .iconfont{
    position: absolute;
    top: 25px;
    left: 35px;
    font-size: 40px;
    color: #fff;
  }
}
</style>