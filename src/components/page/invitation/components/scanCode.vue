<!-- 面对面扫码 -->
<template>
  <div class="scanCode">
    <div class="qr-code-box">
      <h2>客户面对面扫码</h2>
      <p class="step1">请扫描二维码进行身份信息输入</p>
      <div class="qr-code">
        <img src="~IMG/QR-code.png" alt="">
      </div>
      <p class="step2">扫码后关注“观禾未来”微信公众号<br>按照提示完成信息输入</p>
      <div class="cancel">
        <i class="iconfont icon-iconfontguanbi"></i>
      </div>
    </div>
    <p class="other">非面对面客户，直接发布邀约帖</p>
    <router-link to="confirmShare">
      <div class="editBtn">编辑邀约帖</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}

</script>
<style lang='' scoped>
</style>