<!-- 首页模块 -->
<template>
  <div class="index-page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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
          <router-link to="/holdHealth"><div class="short"><img src="~IMG/invitation-service1-short.png" alt=""></div></router-link>
          <router-link to="/operateGuide"><div class="guide"><img src="~IMG/guide-entry.png" alt=""></div></router-link>
        </li>
      </ul>
    </div>
    <!-- <div class="manage-panel">
      <Title title="管理看板" hasLine/>
      <div class="manage-cont">
        <dl>
          <dt><img src="~IMG/index-manage1.png" alt=""></dt>
          <dd>活动分析</dd>
        </dl>
        <dl>
          <dt><img src="~IMG/index-manage2.png" alt=""></dt>
          <dd>区域对比</dd>
        </dl>
        <dl>
          <dt><img src="~IMG/index-manage3.png" alt=""></dt>
          <dd>计划目标</dd>
        </dl>
        <dl>
          <dt><img src="~IMG/index-manage4.png" alt=""></dt>
          <dd>综合统计</dd>
        </dl>
      </div>
    </div> -->
    <!-- <div class="reach-standard">
      <Title title="达标情况" hasLine/>
      <div class="situation">
        <div class="top">
          <span class="icon"><img src="~IMG/heart-health.png" alt=""></span>
          {{statistic.target}}
        </div>
        <div class="cont">
          <div class="month-count">
            <p>本月已增健康账户：{{statistic.totalCustomerQty}} 位</p>
            <p>本月达成目标差距：{{statistic.disparity}} 位</p>
            <p>本月倒数 {{statistic.fromEndMouth}} 天</p>
          </div>
          <dl class="month-rate">
            <dt><big>{{statistic.rateCustomer || 0}}</big></dt>
            <dd>达成率</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="customer-uphold">
      <Title title="客户维护" hasLine/>
      <div class="uphold-type">
        <dl>
          <dt>{{statistic.oldCustomersForMaintain}}</dt>
          <dd>本月需维护的 客户健康账户</dd>
        </dl>
        <dl>
          <dt>{{statistic.customersForMaintain}}</dt>
          <dd>本月已拜访的 客户健康账户</dd>
        </dl>
        <dl>
          <dt>{{statistic.oldCustomersForMaintainUntildays}}</dt>
          <dd>距今有60天未 检测的老客户</dd>
        </dl>
      </div>
    </div> -->
    <div class="index-slogan3">
      <ul>
        <li>
          <img src="~IMG/slogan2.png" alt="">
        </li>
      </ul>
    </div>
    <div class="index-service">
      <Title title="服务宝典" hasLine/>
      <ul>
        <li>
          <router-link to="/serviceStage1">
          <img src="~IMG/index-best-service1.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/serviceStage2">
          <img src="~IMG/index-best-service2.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/serviceStage3">
          <img src="~IMG/index-best-service3.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/serviceStage4">
          <img src="~IMG/index-best-service4.png" alt="">
          </router-link>
        </li>
      </ul>
    </div>
    <div class="index-slogan3">
      <ul>
        <li>
          <img src="~IMG/slogan3.png" alt="">
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
    </van-pull-refresh>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import Title from 'Module/Title'
export default {
  data () {
    return {
      basicInfo: '',
      statistic: '',
      isLoading: false,
      bannerArr: [
        {
          imgUrl: require('@/assets/img/index-banner1.png')
        },
        {
          imgUrl: require('@/assets/img/index-banner2.png')
        },
        {
          imgUrl: require('@/assets/img/index-banner3.png')
        }
      ],
      noticeArr: [
        {content: "2019年4月1号，健康在手检测一次"},
        {content: "2019年4月2号，健康在手检测一次"},
        {content: "2019年4月3号，健康在手检测一次"}
      ]
    };
  },
  components:{
    Title
  },
  computed: {
    // ...mapState(['basicInfo']),
  },
  methods:{
    //下拉刷新
    onRefresh() {
      this.getStaff()
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    //获取民族字典
    getNation(){
      this.$axios({
        method: "get",
        url: "dic/getListByType?type=ZX_GS_BM_MZ",
      })
        .then(result => {
          console.log('result民族',result);
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
          alert("服务器连接繁忙，获取轮播失败！");
          console.log("错误：轮播异常" + err);
        });
    },
    //获取用户信息
    getStaff(){
      let token = localStorage.getItem('authorization')
      let staffCode = localStorage.getItem('staffCode')
      this.$axios({
        method: "post",
        url: "staff/getStaff?token="+token+"&staffCode="+staffCode,
      })
        .then(result => {
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            this.basicInfo = msg
            localStorage.setItem("basicInfo",JSON.stringify(msg));
            console.log('result用户信息',msg);
          }else{
            alert(result.data.message)
          }
        })
        .catch(err => {
          alert("服务器连接繁忙！");
          console.log('错误：获取数据异常',err);
        });
    },
    //获取统计
    getStatistic(){
      console.log('getStatistic')
      let staffCode = localStorage.getItem('staffCode')
      this.$axios({
        method: "post",
        url: "statistics/statisticsNewAdd?staffCode="+staffCode, //
      })
        .then(result => {
          console.log('统计信息',result);
          if (result.data.resultCode == "200"){
            this.statistic = result.data.data
            
          }else{
            alert(result.data.message)
          }
        })
        .catch(err => {
          alert("服务器连接繁忙！");
          console.log('错误：获取数据异常',err);
        });
    }
  },
  mounted(){
    // this.getNation()
    this.getStaff()
    // this.getBannerAndNotice()
    // this.getStatistic()
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
  .van-swipe__indicator--active{
    background-color: #fc7f06;
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
