<!-- 头部2——[   ***   X]-->
<template>
  <div class="page-top2">
    <i class="iconfont" ></i>
    <span>{{title}}</span>
    <i class="iconfont icon-guanbi1" @click="$router.go(-1)"></i>
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