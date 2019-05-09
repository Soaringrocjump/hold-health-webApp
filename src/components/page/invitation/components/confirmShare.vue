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
      <p>我是{{basicInfo.userName}}，我的健康专员工号为{{basicInfo.staffCode}},很高兴您能百忙之中接收我的健康邀约，我的电话是  （微信），您可以随时联系我咨询预约事宜，期待您的电话！</p>
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
    <!-- <router-link to="/appointment"> -->
      <div class="confirmBtn" @click="show = true">已确认，发布邀约</div>
      <!-- <router-link to="/appointment/fillAppointment"><div class="confirmBtn">信息填写</div></router-link>
      <router-link to="/appointment/scanCodeFill"><div class="confirmBtn">面对面扫码</div></router-link> -->
    <!-- </router-link> -->
    <div v-if="show" class="shareShadow">
      <div class="shareBox">
        <div class="sharePlat">
          <dl @click="shareWechat">
            <dt><img src="~IMG/share-wechat.png" alt=""></dt>
            <dd>微信</dd>
          </dl>
          <dl>
            <dt><img src="~IMG/share-wechat-friends.png" alt=""></dt>
            <dd>朋友圈</dd>
          </dl>
          <dl>
            <dt><img src="~IMG/share-wechat-friends.png" alt=""></dt>
            <dd>复制链接</dd>
          </dl>
        </div>
        <div class="cancelBtn" @click="show = false">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      show: false,
      service: [],
      basicInfo: JSON.parse(localStorage.getItem('basicInfo')),
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
  },
  methods:{
    shareWechat(){
      this.$bridge.callhandler('HealthMonitoring', params, (data) => {

          // 处理返回数据
          alert('成功回调')

      })
    },
  },
  mounted(){
    this.service = this.$route.query.service
  }
}

</script>
<style lang='' scoped>
</style>