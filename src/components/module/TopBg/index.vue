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
  height:260px;
  overflow: hidden;
  background: url(~IMG/personal-top.png),linear-gradient(90deg,rgba(106,99,242,1),rgba(186,54,229,1));
  background-size: contain;
}
.gray{
  width:750px;
  height:260px;
  overflow: hidden;
  background: url(~IMG/personal-top.png),#3c4154;
  background-size: contain;
}
</style>