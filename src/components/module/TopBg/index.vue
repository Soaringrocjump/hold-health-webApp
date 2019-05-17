<!-- 头部背景 -->
<template>
  <div :class="[ gray ? 'gray' : 'top-background']">
    <slot/>
  </div>
</template>

<script>
export default {
  props:{
    gray:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    };
  },
}

</script>
<style lang='scss' scoped>
.top-background{
  width:750px;
  height:220px;
  overflow: hidden;
  background: url(http://47.96.67.198:90/static/img/personal-top.d450068.png),linear-gradient(90deg,rgba(106,99,242,1),rgba(186,54,229,1));
  background-size: cover;
  background-repeat: no-repeat;
}
.gray{
  width:750px;
  height:160px;
  overflow: hidden;
  background: url(http://47.96.67.198:90/static/img/personal-top.d450068.png),#3c4154;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>