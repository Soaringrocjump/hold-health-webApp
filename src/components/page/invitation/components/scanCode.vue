<!-- 面对面扫码 -->
<template>
  <div class="scanCode">
    <div class="qr-code-box">
      <h2>客户面对面扫码</h2>
      <p class="step1">请扫描二维码进行身份信息输入</p>
      <div class="qr-code">
        <!-- <img src="~IMG/QR-code.png" alt=""> -->
        <img :src="inviteQRCode" alt="">
      </div>
      <p class="step2">扫码后关注“观禾未来”微信公众号<br>按照提示完成信息输入</p>
      <div class="cancel" @click="$router.go(-1)">
        <i class="iconfont icon-iconfontguanbi"></i>
      </div>
    </div>
    <p class="other">非面对面客户，直接发布邀约帖</p>
    <!-- <router-link to="confirmShare"> -->
      <div class="editBtn" @click="editInvitation">编辑邀约帖</div>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseImgUrl: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=',
      inviteQRCode: ''
    };
  },
  methods:{
    getInviteQRCode(){
      let token = localStorage.getItem('authorization'),
          staffCode = localStorage.getItem('staffCode');
      this.$axios({
        method: "get",
        url: "wx/getInviteQRCode?token="+token+"&staffCode="+staffCode,
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            console.log(msg);
            this.inviteQRCode = this.baseImgUrl + msg
          }else{
            console.log(result)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    editInvitation(){
      this.$router.push({
        path: 'confirmShare',
        query:{
          service: this.$route.query.service
        }
      })
      // let basicInfo = JSON.parse(localStorage.getItem('basicInfo')),
      //     token = localStorage.getItem('authorization'),
      //     staffCode = basicInfo.staffCode,
      //     userName = basicInfo.userName,
      //     choseService = this.$route.query.service
      // console.log(token,staffCode,userName,choseService)
      // location.href=`https://h.guanqi2019.com/func/hrs/#/invitation?token=${token}&staffCode=${staffCode}&userName=${userName}&choseService=${choseService}`
    }
  },
  mounted(){
    this.getInviteQRCode()
  }
}

</script>
<style lang='' scoped>
</style>