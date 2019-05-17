<!-- 头部 -->
<template>
  <div :class="['page-top',hasBg ? 'hasBg': '',theme,]">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: '标题'
    },
    theme:{//主题色： white/black
      type: String,
      default: ''
    },
    hasBg:{//是否有背景
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
  justify-content: center;
  align-items: center;
  color: #fff;
  // i{
  //   font-size: 40px;
  // }
  i:nth-of-type(1){
    font-size: 40px;
  }
  i:nth-of-type(2){
    font-size: 46px;
  }
  span{
    font-size: 36px;
  }
}
.white{
  color: #fff;
}
.black{
  color: #333;
}
.hasBg{
  background: #fff;
}
</style>