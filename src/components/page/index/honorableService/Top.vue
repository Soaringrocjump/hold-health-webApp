<!-- 尊贵服务头部-->
<template>
  <div class="page-top" :class="[hasTopBg ? 'hasTopBg' : '']">
    <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
    <span>{{title}}</span>
    <i class="iconfont"></i>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: ''
    },
    hasTopBg:{
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
.page-top{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 750px;
  height: 100px;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  i{
    font-size: 40px;
  }
  span{
    font-size: 36px;
  }
}
.hasTopBg{
  background: #8b51ed;
}
</style>