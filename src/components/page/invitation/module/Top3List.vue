<!-- 邀约模块头部 -->
<template>
  <div class="invitation-top-option">
    <span><i class="iconfont icon-fanhui" @click="$router.go(-1)"></i></span>
    <span>{{title}}</span>
    <span @click="cancel"><i class="iconfont icon-guanbi1"></i></span>
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
  methods:{
    cancel(){
      this.$router.push({
        path: '/menu'
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.invitation-top-option{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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