<!-- 首页模块 -->
<template>
  <div class="index-page">
    <div class="index-top">
      <i class="iconfont icon-saomiao"></i>
      <div class="searchBox">
        <i class="iconfont icon-xiazai17"></i>
        <input type="text" placeholder="搜索客户、订单、服务、产品">
      </div>
      <i class="iconfont icon-xiaoxi1"></i>
    </div>
    <div class="index-banner">
      <img src="~IMG/index-banner.png" alt="">
    </div>
    <div class="index-notice">
      <!-- <i class="iconfont icon-horn"></i> -->
      <i>
        <img src="~IMG/index-notice.png" alt="">
      </i>
      <!-- <marquee direction="left" behavior="scroll" scrollamount="5" hspace="10" >
        5月1日，太保常州客户经营日。太保常州客户经...
      </marquee> -->
      <div class="notice-slide">
        <ul>
          <li class="slide1">5月1日，太保常州客户经营日。太保常州客户经...</li>
          <!-- <li class="slide2">5月2日，太保常州客户经营日。太保常州客户经...</li> -->
        </ul>
      </div>
    </div>
    <div class="index-count">
      <dl>
        <router-link to="/myClient"><dt>{{basicInfo.customerTotal}}</dt></router-link>
        <dd>我的客户</dd>
      </dl>
      <dl>
        <router-link to="/successTest"><dt>{{basicInfo.successDetectionTotal}}</dt></router-link>
        <dd>成功检测</dd>
      </dl>
      <dl>
        <router-link to="/waitTest"><dt>{{basicInfo.waitDetectionTotal}}</dt></router-link>
        <dd>等待检测</dd>
      </dl>
      <dl>
        <router-link to="/recharge"><dt>{{basicInfo.rechargeRecordTotal}}</dt></router-link>
        <dd>充值记录</dd>
      </dl>
    </div>
    <div class="index-slogan">
      <ul>
        <li>
          <img src="~IMG/slogan1.png" alt="">
        </li>
        <li>
          <img src="~IMG/slogan3.png" alt="">
        </li>
      </ul>
    </div>
    <div class="index-service">
      <Title title="尊贵服务" hasLine/>
      <ul>
        <li>
          <img src="~IMG/index-best-service1.png" alt="">
        </li>
        <li>
          <img src="~IMG/index-best-service2.png" alt="">
        </li>
        <li>
          <img src="~IMG/index-best-service3.png" alt="">
        </li>
        <li>
          <img src="~IMG/index-best-service4.png" alt="">
        </li>
      </ul>
    </div>
    <div class="index-slogan3">
      <ul>
        <li>
          <img src="~IMG/slogan4.png" alt="">
        </li>
      </ul>
    </div>
    <div class="index-test">
      <Title title="检测项目" hasLine hasMore/>
      <ul class="clearfix">
        <li class="border-r border-b">
          <dl>
            <dt>靶向基因检测</dt>
            <dd>试用于腺癌群体药后专属治疗方案</dd>
          </dl>
          <div class="test-icon">
            <img src="~IMG/index-test1.png" alt="">
          </div>
        </li>
        <li class="border-b">
          <dl>
            <dt>心脏毒性检测</dt>
            <dd>判断治疗用药 筛查患癌风险</dd>
          </dl>
          <div class="test-icon">
            <img src="~IMG/index-test2.png" alt="">
          </div>
        </li>
        <li class="border-r">
          <dl>
            <dt>MIS检测</dt>
            <dd>科学，精准，高效</dd>
          </dl>
          <div class="test-icon">
            <img src="~IMG/index-test3.png" alt="">
          </div>
        </li>
        <li>
          <dl>
            <dt>遗传基因检测</dt>
            <dd>全面覆盖多种遗传基因检测</dd>
          </dl>
          <div class="test-icon">
            <img src="~IMG/index-test4.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="index-mytool">
      <Title title="我的工具" hasLine/>
      <div class="tool-list clearfix">
        <dl class="border-r border-b">
          <dt>
            <img src="~IMG/index-tool1.png" alt="">
          </dt>
          <dd>账户管理</dd>
        </dl>
        <dl class="border-r border-b">
          <dt>
            <img src="~IMG/index-tool2.png" alt="">
          </dt>
          <dd>推广海报</dd>
        </dl>
        <dl class="border-b">
          <dt>
            <img src="~IMG/index-tool3.png" alt="">
          </dt>
          <dd>进度查询</dd>
        </dl>
        <dl class="border-r">
          <dt>
            <img src="~IMG/index-tool4.png" alt="">
          </dt>
          <dd>流程说明</dd>
        </dl>
        <dl class="border-r">
          <dt>
            <img src="~IMG/index-tool5.png" alt="">
          </dt>
          <dd>升级会员</dd>
        </dl>
        <dl class="border-r">
          <dt>
            <img src="~IMG/index-tool6.png" alt="">
          </dt>
          <dd>帮助中心</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import Title from 'Module/Title'
export default {
  data () {
    return {
      basicInfo: JSON.parse(localStorage.getItem("basicInfo"))
    };
  },
  components:{
    Title
  },
  computed: {
    // ...mapState(['basicInfo']),
  },
  methods:{
    //获取民族字典
    getNation(){
      this.$axios({
        method: "get",
        url: "dic/getListByType?type=ZX_GS_BM_MZ",
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data.values
            // console.log(msg)
            localStorage.setItem('nationArr',JSON.stringify(msg))
          }else{
            alert(result.data.message)
          }
        })
        .catch(err => {
          alert("错误：获取nation数据异常" + err);
        });
    }
  },
  mounted(){
    this.getNation()
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/index.scss";
</style>