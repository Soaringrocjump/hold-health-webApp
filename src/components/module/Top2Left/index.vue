<!-- 头部2——[X***      ...]-->
<template>
  <div class="page-top2">
    <div class="top-left">
      <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
      <span>{{title}}</span>
    </div>
    <div class="top-right">
      <i class="iconfont icon-gengduo"></i>
    </div>
  </div>
</template>

<script>
export default {
  props:['title'],
  data () {
    return {
    };
  },
}

</script>
<style lang='scss' scoped>
.page-top2{
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
  background: #fff;
  color: #000;
  .top-left{
    i{
      font-size: 40px;
    }
    span{
      font-size: 36px;
    }
  }
  .top-right{
    i{
      font-size: 46px;
    }
  } 
}

</style>