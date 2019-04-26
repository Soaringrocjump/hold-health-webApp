<!-- 客户收到邀约 -->
<template>
  <div class="getAppointment">
    <TopBg>
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
    </TopBg>
    <div class="invitation-info">
      <h2>您好：</h2>
      <p>我是王XX，我的健康专员工号为YYYY0001,很高兴您能百忙之中接收我的健康邀约，我的电话是18888888888（微信），您可以随时联系我咨询预约事宜，期待您的电话！</p>
    </div> 
    <div class="gradient-txt">
      <img src="~IMG/invitation-txt1.png" alt="">
    </div>
    <p class="intro">免费上门为您提供以下服务项目</p>
    <div class="service-list">
      <ul>
        <li  v-for="(item,index) in serviceList" :key="index">
          <div class="invitation-service">
            <img :src="item.serviceImg" alt="">
          </div>
          <div class="arrow">
            <img src="~IMG/invitation-arrow.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="service-info">
      <div class="gradient-txt2">
        <img src="~IMG/invitation-txt2.png" alt="">
      </div>
      <p>健康服务专员<span class="officer">YYY0001</span>为您服务</p>
      <router-link to="fillAppointment">
      <div class="officer-code">
        <img src="~IMG/QR-code.png" alt="">
      </div>
      </router-link>
      <dl class="step">
        <dt>预约步骤：</dt>
        <dd>1、长按二维码关注微信公众号；</dd>
        <dd>2、收到“预约注册登记/查看报告—请点击进入”信息后，点击进入客户预约信息登记；</dd>
        <dd>3、如实填写信息，点击确认完成健康检测预约。</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      serviceList:[
        {
          serviceName: '健康在手',
          serviceImg: require('@/assets/img/invitation-service5.png')
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
  }
}

</script>
<style lang='' scoped>
</style>