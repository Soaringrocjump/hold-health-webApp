<!-- 用户信息头部 -->
<template>
  <div class="personal-top-option">
    <span><i class="iconfont icon-fanhui" v-if="hasBack" @click="$router.go(-1)"></i></span>
    <span>{{title}}</span>
    <span><i v-if="hasMore" class="iconfont icon-gengduo"></i></span>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: "标题"
    },
    hasBack:{
      type: Boolean,
      default: false
    },
    hasMore:{
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
.personal-top-option{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  padding: 0 30px;
  color: #fff;
  i{
    font-size: 40px;
  }
  span{
    font-size: 36px;
  }
}
</style>