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
          <input type="text" v-model="userName" placeholder="请输入你的工号">
        </li>
        <li>
          <i class="iconfont icon-iconmima"></i>
          <!-- <i>
            <img src="~IMG/login-psd.png" alt="">
          </i> -->
          <input type="password" v-model="userPwd" placeholder="请输入您的身份证后六位">
        </li>
      </ul>
      <div class="btn" @click="login">登 录</div>
    </div>
    <van-popup v-model="show" position="top" >
      {{message}}
    </van-popup>
  </div>
</template>

<script>
// import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      show: false,
      message:'',
      userName: '',
      userPwd: ''
    };
  },
  methods:{
    // ...mapMutations(['LOGIN_INFO']),
    //登录跳转
    login(){
      if(this.userName != '' && this.userPwd != ''){
        console.log(this.userName);
        console.log(this.userPwd);
        let userName = this.userName.trim()
        let userPwd = this.userPwd.trim()
        this.$axios({
          method: "post",
          url: "staff/login?userName="+userName+"&userPwd="+userPwd,
        })
          .then(result => {
            if (result.data.resultCode == "200"){
              var msg = result.data.data
              console.log('result',msg)
              localStorage.setItem("authorization",msg.token)
              localStorage.setItem("staffCode",msg.staffCode)
              // this.LOGIN_INFO(msg)
              this.$router.push({
                path: 'menu'
              })
            }else{
              console.log(result)
              this.message=result.data.message
              this.show = true;
              setTimeout(()=>{
                this.show = false;
              },2000)
            }
          })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });
      }else{
        this.message="请输入账号或密码"
        this.show = true;
        setTimeout(()=>{
          this.show = false;
        },2000)
      }
      
    }
  },
  beforeCreate(){
    if(localStorage.getItem('authorization')){
      this.$router.push({
        path: 'menu'
      })
    }
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/login.scss";
.van-popup{
  color: rgba(255, 0, 0, 0.7);
  padding: 20px 50px;
  text-align: center;
}
</style>