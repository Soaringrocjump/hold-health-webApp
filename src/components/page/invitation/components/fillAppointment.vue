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
        <dd><input type="text" placeholder="请输入您的姓名"></dd>
      </dl>
      <dl>
        <dt>性别<span class="nes">*</span></dt>
        <dd>
          <span class="arrow"><img src="~IMG/down.png" alt=""></span>
          <select >
            <option value="0">男</option>
            <option value="1">女</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>生日<span class="nes">*</span></dt>
        <dd><input type="text" placeholder="请输入您的生日"></dd>
      </dl>
      <dl>
        <dt>其他备注信息</dt>
        <dd><textarea type="text" placeholder="请输入您的备注信息"></textarea></dd>
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
    };
  },
  components:{
    TopBg
  }
}

</script>
<style lang='' scoped>
</style>