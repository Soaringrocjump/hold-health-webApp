<!-- 如何检测 -->
<template>
  <div class="guide">
    <img v-for="(img,index) in imageList" :key="index" v-lazy="img.path">
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: [
        {
          path: require('@/assets/img/test-step1.png')
        },
        {
          path: require('@/assets/img/test-step2.png')
        },
        {
          path: require('@/assets/img/test-step3.png')
        },
        {
          path: require('@/assets/img/test-step4.png')
        },
        {
          path: require('@/assets/img/test-step5.png')
        },
        {
          path: require('@/assets/img/test-step6.png')
        }
      ]
    };
  },
}

</script>
<style lang='scss' scoped>
.guide{
  position: relative;
  width: 750px;
}
</style>