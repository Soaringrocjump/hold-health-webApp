<!-- 邀约模块头部2- -->
<template>
  <div class="invitation-top-option">
    <span>
      <i class="iconfont icon-guanbi1" @click="$router.go(-1)"></i>
      <span>{{title}}</span>
    </span>
    <span>
      <i class="iconfont icon-gengduo"></i>
    </span>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: "标题"
    }
  },
  data () {
    return {
    };
  },
}

</script>
<style lang='scss' scoped>
.invitation-top-option{
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-top: 60px;
  padding: 0 35px;
  color: #000;
  background: #fff;
  i{
    font-size: 40px;
    color: #333;
  }
  span{
    font-size: 36px;
  }
}
</style>