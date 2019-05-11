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
      <!-- <img src="~IMG/index-banner1.png" alt=""> -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerArr" :key="index">
          <img :src="item.imgUrl"/>
        </van-swipe-item>
      </van-swipe>
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
        <!-- <ul>
          <li class="slide1">5月1日，太保常州客户经营日。太保常州客户经...</li>
        </ul> -->
        <van-swipe :autoplay="3000" vertical indicator-color="blue" :height="34">
          <van-swipe-item v-for="(item,index) in noticeArr" :key="index">{{item.content}}</van-swipe-item>
        </van-swipe>
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
          <!-- <router-link to="/serviceStage1"> -->
          <img src="~IMG/index-best-service1.png" alt="">
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link to="/serviceStage2"> -->
          <img src="~IMG/index-best-service2.png" alt="">
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link to="/serviceStage3"> -->
          <img src="~IMG/index-best-service3.png" alt="">
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link to="/serviceStage4"> -->
          <img src="~IMG/index-best-service4.png" alt="">
          <!-- </router-link> -->
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
      basicInfo: JSON.parse(localStorage.getItem("basicInfo")),
      bannerArr: [
        // {
        //   imgSrc: require('@/assets/img/index-banner1.png')
        // },
        // {
        //   imgSrc: require('@/assets/img/index-banner2.png')
        // },
        // {
        //   imgSrc: require('@/assets/img/index-banner3.png')
        // }
      ],
      noticeArr: []
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
          alert("服务器连接繁忙！");
          console.log("错误：获取民族异常" + err);
        });
    },
    //获取banner和notice
    getBannerAndNotice(){
      this.$axios({
        method: "get",
        url: "activity/getActivityAndNotice?orgCode=CNTP",
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            this.bannerArr = result.data.data.ACTIVITY.list
            this.noticeArr = result.data.data.NOTICE.list
          console.log('bannerArr',this.bannerArr);
          console.log('noticeArr',this.noticeArr);
          }else{
            alert(result.data.message)
          }
        })
        .catch(err => {
          alert("服务器连接繁忙！");
          console.log("错误：轮播异常" + err);
        });
    }
  },
  mounted(){
    this.getNation()
    this.getBannerAndNotice()
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/index.scss";
</style>
<style lang='scss'>
.index-banner{
  .van-swipe__indicator{
    width: 12px;
    height: 12px;
  }
}
.notice-slide{
  .van-swipe-item{
    // height: 72px !important;
    // line-height: 60px;
    display: flex;
    align-items: center;
    color: #000;
    font-size: 26px;
  }
  .van-swipe__indicators{
    display: none;
  }
}
</style>
