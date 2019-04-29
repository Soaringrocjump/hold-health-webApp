<!-- 成功检测 -->
<template>
  <div class="successTest">
    <TopBg>
      <Top title="成功检测"  theme="white"/>
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
                <img src="~IMG/report-push.png" alt="">
              </span>
              <span>
                <img src="~IMG/report-print.png" alt="">
              </span>
            </div>
          </div>
          <dl class="right-score">
            <dt>综合评分</dt>
            <dd>78</dd>
          </dl>
        </li>
        <li>
          <div class="left-info">
            <p>检测单号： CPIC20575587</p>
            <p>申请检测人：<span>王一一</span><span>男</span><span>20岁</span></p>
            <p>提交时间： 2018-10-28  20:57:56</p>
            <div class="test-tag">
              <span>
                <img src="~IMG/report-push.png" alt="">
              </span>
              <span>
                <img src="~IMG/report-print.png" alt="">
              </span>
            </div>
          </div>
          <dl class="right-score">
            <dt>综合评分</dt>
            <dd>78</dd>
          </dl>
        </li>
        <li>
          <div class="left-info">
            <p>检测单号： CPIC20575587</p>
            <p>申请检测人：<span>王一一</span><span>男</span><span>20岁</span></p>
            <p>提交时间： 2018-10-28  20:57:56</p>
            <div class="test-tag">
              <span>
                <img src="~IMG/report-push.png" alt="">
              </span>
              <span>
                <img src="~IMG/report-print.png" alt="">
              </span>
            </div>
          </div>
          <dl class="right-score">
            <dt>综合评分</dt>
            <dd>78</dd>
          </dl>
        </li>
        <li>
          <div class="left-info">
            <p>检测单号： CPIC20575587</p>
            <p>申请检测人：<span>王一一</span><span>男</span><span>20岁</span></p>
            <p>提交时间： 2018-10-28  20:57:56</p>
            <div class="test-tag">
              <span>
                <img src="~IMG/report-push.png" alt="">
              </span>
              <span>
                <img src="~IMG/report-print.png" alt="">
              </span>
            </div>
          </div>
          <dl class="right-score">
            <dt>综合评分</dt>
            <dd>78</dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Top from 'Module/Top'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
    };
  },
  components:{
    Top,
    TopBg
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/healthTest.scss";
</style>