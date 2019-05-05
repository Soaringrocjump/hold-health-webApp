<!-- 成功检测 -->
<template>
  <div class="successTest">
    <div class="fix-top">
      <TopBg>
        <Top title="成功检测"  theme="white"/>
      </TopBg>
      <div class="waitTest-search">
        <div class="left-input">
          <i class="iconfont icon-xiazai17"></i>
          <input type="text" placeholder="输入客户或订单号点击查询">
        </div>
        <div class="right-btn">查 询</div>
      </div>
    </div>
    <ul class="test-list">
      <li v-for="(item,index) in successOrderList" :key="index">
        <div class="left-info">
          <p>检测单号： {{item.orderCode}}</p>
          <p>被检测人：<span>{{item.userName}}</span><span>{{item.userGender}}</span><span>{{item.userAge}}岁</span></p>
          <p>提交时间： {{item.gmtModify | formatterDateTime}}</p>
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
          <dd>{{item.orderScore}}</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import Top from 'Module/Top'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      successOrderList: []
    };
  },
  components:{
    Top,
    TopBg
  },
  methods:{
    //获取检测列表
    getOrderList(){
      this.$axios({
        method: "post",
        url: "order/orderList",
        data: {
          orderStatus: 1,
          pageNum: 0,
          pageSize: 0,
          staffCode: localStorage.getItem("staffCode")
        }
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            this.successOrderList = msg.list
            console.log(this.orderList);
          }else{
            console.log(result)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
  },
  mounted(){
    this.getOrderList()
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/healthTest.scss";
</style>