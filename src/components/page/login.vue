<!-- 登录页 -->
<template>
  <div class="login-page">
    <div class="login-top">
      <img src="~IMG/login-slogan.png" alt="">
    </div>
    <div class="login-form">
      <h2>登录</h2>
      <ul>
        <li>
          <i class="iconfont icon-shouji01"></i>
          <!-- <i>  引入图片的方法
            <img src="~IMG/login-user.png" alt="">
          </i> -->
          <input type="text" placeholder="输入你的工号">
        </li>
        <li>
          <i class="iconfont icon-iconmima"></i>
          <!-- <i>
            <img src="~IMG/login-psd.png" alt="">
          </i> -->
          <input type="text" placeholder="输入您的身份证后六位">
        </li>
      </ul>
      <div class="btn" @click="login">登 录</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods:{
    //登录跳转
    login(){
      this.$router.push({
        path: 'menu'
      })
    }
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/login.scss";
</style>