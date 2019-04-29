<!-- 确认发布 -->
<template>
  <div class="confirmShare">
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
    <!-- <router-link to="/appointment"> -->
      <div class="confirmBtn">已确认，发布邀约</div>
    <!-- </router-link> -->
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