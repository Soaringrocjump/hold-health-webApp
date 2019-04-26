<!-- 填写预约信息 -->
<template>
  <div class="fillAppointment">
    <TopBg>
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
    </TopBg>
    <div class="invitation-info">客户预约登记</div> 
    <div class="gradient-txt2">
      <img src="~IMG/invitation-txt2.png" alt="">
    </div>
    <p>健康服务专员<span class="officer">YYY0001</span>为您服务</p>
    <div class="fill-info">
      <dl>
        <dt>姓名<span class="nes">*</span></dt>
        <dd><input type="text" ></dd>
      </dl>
      <dl>
        <dt>性别<span class="nes">*</span></dt>
        <dd><input type="text" ></dd>
      </dl>
      <dl>
        <dt>手机号码<span class="nes">*</span></dt>
        <dd><input type="text" ></dd>
      </dl>
      <dl>
        <dt>其他备注信息</dt>
        <dd><textarea type="text">sss</textarea></dd>
      </dl>
      <div class="confirmBtn">我要预约</div>
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