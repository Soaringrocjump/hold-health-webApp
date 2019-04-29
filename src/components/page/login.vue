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
          <input type="text" v-model="userName" placeholder="输入你的工号">
        </li>
        <li>
          <i class="iconfont icon-iconmima"></i>
          <!-- <i>
            <img src="~IMG/login-psd.png" alt="">
          </i> -->
          <input type="text" v-model="userPwd" placeholder="输入您的身份证后六位">
        </li>
      </ul>
      <div class="btn" @click="login">登 录</div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      userName: '',
      userPwd: ''
    };
  },
  methods:{
    ...mapMutations(['LOGIN_INFO']),
    //登录跳转
    login(){
      if(this.userName != '' && this.userPwd != ''){
        console.log(this.userName);
        console.log(this.userPwd);
        this.$axios({
        method: "post",
        url: "staff/login?userName="+this.userName+"&userPwd="+this.userPwd,
      })
        .then(result => {
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            sessionStorage.setItem("authorization",msg.token);
          
            console.log('result',msg);
            this.LOGIN_INFO(msg)
            this.$router.push({
              path: 'menu',
              // query:{
              //   customerTotal: msg.customerTotal,
              //   successDetectionTotal: msg.successDetectionTotal,
              //   waitDetectionTotal: msg.waitDetectionTotal,
              //   rechargeRecordTotal: msg.rechargeRecordTotal
              // }
            })
          }else{

          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
      }
      
      
    }
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/login.scss";
</style>