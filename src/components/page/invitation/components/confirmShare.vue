<!-- 确认发布 -->
<template>
  <div class="confirmShare">
    <TopBg>
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
    </TopBg>
    <!-- <div class="invitation-info">
      <h2>您好：</h2>
      <p>我是{{basicInfo.userName}}，我的健康专员工号为{{basicInfo.staffCode}},很高兴您能百忙之中接收我的健康邀约，我的电话是  （微信），您可以随时联系我咨询预约事宜，期待您的电话！</p>
    </div>  -->
    <div class="invitation-info">
      <div class="personal-info">
        <div class="head-info">
          <div class="head">
            <img src="~IMG/userHead.png" alt="">
          </div>
          <dl>
            <dt>健康专员工号</dt>
            <dd>{{basicInfo.staffCode}}</dd>
          </dl>
        </div>
        <div class="qr-code">
          <i class="iconfont icon-erweima"></i>
          <p>二维码名片</p>
        </div>
      </div>
      <div class="personal-card">
        <div>
          <span>编辑我的名片</span>
        </div>
        <div>
          <span>分享我的名片</span>
        </div>
      </div>
      <div class="personal-input">
        <textarea v-model="remark"  rows="3" placeholder="点此编辑你的邀约留言（不超过150个字）"></textarea>
      </div>
    </div>
    <div class="gradient-txt">
      <img src="~IMG/invitation-txt1.png" alt="">
    </div>
    <p class="intro">免费上门为您提供以下服务项目</p>
    <div class="service-list">
      <ul>
        <li  v-for="(item,index) in serviceList" :key="index" v-if="service.includes(item.serviceName)">
          <!-- <div class="invitation-service"> -->
            <img :src="item.serviceImg" alt="">
          <!-- </div> -->
          <!-- <div class="arrow">
            <img src="~IMG/invitation-arrow.png" alt="">
          </div> -->
        </li>
      </ul>
    </div>
    <div class="confirmBtn" @click="confirm">已确认，发布邀约</div>
    <van-actionsheet v-model="show" cancel-text="取消">
      <div class="sharePlat">
        <dl @click="shareWechat">
          <dt><img src="~IMG/share-wechat.png" alt=""></dt>
          <dd>微信</dd>
        </dl>
        <dl @click="shareFriendCircle">
          <dt><img src="~IMG/share-wechat-friends.png" alt=""></dt>
          <dd>朋友圈</dd>
        </dl>
        <dl @click="copyLink">
          <dt><img src="~IMG/share-copy-link.png" alt=""></dt>
          <dd>复制链接</dd>
        </dl>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      show: false,
      token: localStorage.getItem('authorization'),
      service: [],
      remark: '',
      basicInfo: JSON.parse(localStorage.getItem('basicInfo')),
      serviceList:[
        {
          serviceName: '健康在手',
          serviceImg: require('@/assets/img/invitation-service1.png')
        },
        {
          serviceName: '荃禾"7+3"',
          serviceImg: require('@/assets/img/invitation-service2.png')
        },
        {
          serviceName: '遗传基因检测',
          serviceImg: require('@/assets/img/invitation-service3.png')
        },
        {
          serviceName: '健康智库',
          serviceImg: require('@/assets/img/invitation-service4.png')
        },
      ]
    };
  },
  components:{
    TopBg
  },
  methods:{
    confirm(){
      this.show = true
      localStorage.setItem('shareRemark',this.remark)
    },
    //分享微信
    shareWechat(){
      // this.$bridge.callhandler('HealthMonitoring', (data) => {
      //     // 处理返回数据
      //     alert('成功回调')
      // })
      console.log(this.token,this.basicInfo.staffCode,this.remark)
      location.href=`ShareToWeixin?token=${this.token}&staffCode=${this.basicInfo.staffCode}&remark=${this.remark}&type=1`
    },
    //分享朋友圈
    shareFriendCircle(){
      console.log(this.token,this.basicInfo.staffCode,this.remark)
      location.href=`ShareToWeixin?token=${this.token}&staffCode=${this.basicInfo.staffCode}&remark=${this.remark}&type=2`
    },
    //复制链接
    copyLink(){
      let link = this.$route.fullPath;
      console.log(link)
    }
  },
  mounted(){
    this.service = this.$route.query.service
    this.remark = localStorage.getItem('shareRemark')
  }
}

</script>
<style lang='scss'>
.sharePlat{
  padding: 70px 70px 40px;
  display: flex;
  dl{
    text-align: center;
    dt{
      width: 100px;
      margin: 0 auto;
    }
    dd{
      color: #323232;
      font-size: 28px;
      margin-top: 10px;
    }
  }
  dl~dl{
    margin-left: 70px;
  }
}
.van-popup--bottom{
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  .van-actionsheet__cancel{
    height: 119px;
    line-height: 119px;
    font-size: 32px;
    color: #FF3657;
  }
}
</style>