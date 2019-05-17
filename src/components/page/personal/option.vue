<!-- 设置 -->
<template>
  <div class="option-page">
    <TopBg>
      <PersonTop title="设置" hasBack/>
    </TopBg>
    <ul class="option-list">
      <router-link to="/aboutUs">
      <li>
        <div class="left">
          <div class="icon">
            <img src="~IMG/option-icon1.png" alt="">
          </div>
          <h2>关于我们</h2>
        </div>
        <i class="iconfont icon-youhua"></i>
      </li>
      </router-link>
      <router-link to="/userAgreement">
      <li>
        <div class="left">
          <div class="icon">
            <img src="~IMG/option-icon2.png" alt="">
          </div>
          <h2>用户协议</h2>
        </div>
        <i class="iconfont icon-youhua"></i>
      </li>
      </router-link>
      <li>
        <div class="left">
          <div class="icon">
            <img src="~IMG/option-icon3.png" alt="">
          </div>
          <h2>清除缓存</h2>
        </div>
        <i class="iconfont icon-youhua"></i>
      </li>
      <li>
        <div class="left">
          <div class="icon">
            <img src="~IMG/option-icon4.png" alt="">
          </div>
          <h2>意见反馈</h2>
        </div>
        <i class="iconfont icon-youhua"></i>
      </li>
      <li>
        <div class="left">
          <div class="icon">
            <img src="~IMG/option-icon5.png" alt="">
          </div>
          <h2>检查版本更新</h2>
        </div>
        <i class="iconfont icon-youhua"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import PersonTop from 'Module/PersonTop'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
    };
  },
  components:{
    PersonTop,
    TopBg
  },
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/personal.scss";
</style>