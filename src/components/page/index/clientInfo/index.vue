<!-- 客户信息模块 -->
<template>
  <div class="clientInfo-page">
    <div class="clientInfo-top">
      <PersonTop title="客户信息" hasBack hasMore/>
    </div>
    <div class="clientInfo-panel">
      <div class="clientInfo-card">
        <div class="clientInfo-card-up">
          <div class="head-info">
            <div class="head">
              <img src="~IMG/YY.jpg" alt="">
            </div>
            <h2>徐昭君</h2>
            <h3>男</h3>
          </div>
          <div class="type">
            <img src="~IMG/myClient-type-zhun.png" alt="">
          </div>
        </div>
        <div class="clientInfo-card-down">
          <div class="info-left">
            <p>身高：170 厘米</p>
            <p>民族：汉族</p>
            <p>联系电话：18888888888</p>
            <p>常住地：浙江省宁波市镇海区</p>
            <p>复检时间：2018-10-27</p>
          </div>
          <div class="info-right">
            <p>体重：60 公斤</p>
            <p>年龄：38 岁</p>
          </div>
          <div class="revise">
            <i class="iconfont icon-bianji1"></i>
          </div>
        </div>
      </div>
      <div class="clientInfo-archive">
        <Title title="健康档案" />
        <div class="archive-card">
          <div class="card1">
            <div class="card-icon">
              <img src="~IMG/clientInfo-icon1.png" alt="">
            </div>
            <dl>
              <dt>亚健康检测</dt>
              <dd>
                <span><big>20</big><small>次</small></span>
                <i class="iconfont icon-youhua"></i>
              </dd>
            </dl>
          </div>
          <div class="card2">
            <div class="card-icon">
              <img src="~IMG/clientInfo-icon2.png" alt="">
            </div>
            <dl>
              <dt>健康治库VIP</dt>
              <dd>
                <span>已开卡</span>
                <i class="iconfont icon-youhua"></i>
              </dd>
            </dl>
          </div>
          <div class="card3">
            <div class="card-icon">
              <img src="~IMG/clientInfo-icon3.png" alt="">
            </div>
            <dl>
              <dt>基因检测</dt>
              <dd>
                <span><big>2</big><small>次</small></span>
                <i class="iconfont icon-youhua"></i>
              </dd>
            </dl>
          </div>
          <div class="card4">
            <div class="card-icon">
              <img src="~IMG/clientInfo-icon4.png" alt="">
            </div>
            <dl>
              <dt>其他检测</dt>
              <dd>
                <span>赠送礼品</span>
                <i class="iconfont icon-youhua"></i>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="clientInfo-service">
        <Title title="服务记录" hasLine/>
        <ul class="service-record">
          <li>2019年04月01日，健康在手健康检测1次。</li>
          <li>2019年04月01日，体姿态测评1次。</li>
          <li>2019年03月01日，健康在手健康检测1次。</li>
        </ul>
      </div>
    </div>
    

  </div>
</template>

<script>
import PersonTop from 'Module/PersonTop'
import Title from 'Module/Title'
export default {
  data () {
    return {
    };
  },
  components:{
    PersonTop,
    Title
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/myClient.scss";
</style>