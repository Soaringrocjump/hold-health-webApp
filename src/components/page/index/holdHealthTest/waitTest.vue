<!-- 等待检测 -->
<template>
  <div class="waitTest">
    <TopBg>
      <Top title="等待检测"  theme="white"/>
    </TopBg>
    <div class="waitTest-card-search">
      <div class="waitTest-search">
        <div class="left-input">
          <i class="iconfont icon-xiazai17"></i>
          <input type="text" placeholder="输入客户或订单号点击查询">
        </div>
        <div class="right-btn">查 询</div>
      </div>
      <ul class="test-list">
        <li>
          <div class="left-info">
            <p>检测单号： CPIC20575587</p>
            <p>申请检测人：<span>王一一</span><span>男</span><span>20岁</span></p>
            <p>提交时间： 2018-10-28  20:57:56</p>
            <div class="test-tag">
              <span>
                <img src="~IMG/hold-health-tag1.png" alt="">
              </span>
            </div>
          </div>
          <div class="right-item" @click="popOut">
            <img src="~IMG/hold-health-test-item.png" alt="">
          </div>
        </li>
        <li>
          <div class="left-info">
            <p>检测单号： CPIC20575587</p>
            <p>申请检测人：<span>王一一</span><span>男</span><span>20岁</span></p>
            <p>提交时间： 2018-10-28  20:57:56</p>
            <div class="test-tag">
              <span>
                <img src="~IMG/hold-health-tag2.png" alt="">
              </span>
            </div>
          </div>
          <div class="right-item">
            <img src="~IMG/hold-health-test-item.png" alt="">
          </div>
        </li>
        <li>
          <div class="left-info">
            <p>检测单号： CPIC20575587</p>
            <p>申请检测人：<span>王一一</span><span>男</span><span>20岁</span></p>
            <p>提交时间： 2018-10-28  20:57:56</p>
            <div class="test-tag">
              <span>
                <img src="~IMG/hold-health-cancel.png" alt="">
              </span>
            </div>
          </div>
          <div class="right-item">
            <img src="~IMG/hold-health-test-item.png" alt="">
          </div>
        </li>
        <li>
          <div class="left-info">
            <p>检测单号： CPIC20575587</p>
            <p>申请检测人：<span>王一一</span><span>男</span><span>20岁</span></p>
            <p>提交时间： 2018-10-28  20:57:56</p>
            <div class="test-tag">
              <span>
                <img src="~IMG/hold-health-info.png" alt="">
              </span>
              <span>
                <img src="~IMG/hold-health-cancel.png" alt="">
              </span>
            </div>
          </div>
          <div class="right-item">
            <img src="~IMG/hold-health-test-item.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="pop-up-bg" v-if="visible">
      <div class="pop-up-frame">
        <div class="frame-cont">
          <div class="frame-up">
            <h2>客户扫码</h2>
            <p>请扫描二维码进行身份信息输入</p>
          </div>
          <div class="qrcode-box">
            <img src="~IMG/QR-code.png" alt="">
          </div>
          <p>扫码后关注“观禾未来”微信公众号</p>
          <p>按照提示完成信息输入</p>
        </div>
        <div class="frame-close" @click="cancel">
          <img src="~IMG/hold-health-close.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from 'Module/Top'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      visible: false
    };
  },
  components:{
    Top,
    TopBg
  },
  methods:{
    //弹出弹框
    popOut(){
      this.visible = true
    },
    //取消弹框
    cancel(){
      this.visible = false
    }
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/healthTest.scss";
</style>