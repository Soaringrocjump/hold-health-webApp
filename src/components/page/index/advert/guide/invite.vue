<!-- 如何邀约 -->
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
          path: require('@/assets/img/invite-step1.png')
        },
        {
          path: require('@/assets/img/invite-step2.png')
        },
        {
          path: require('@/assets/img/invite-step3.png')
        },
        {
          path: require('@/assets/img/invite-step4.png')
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