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
          <input type="text" v-model="searchName" placeholder="输入客户点击查询">
        </div>
        <div class="right-btn" @click="searchOrder">查 询</div>
      </div>
    </div>
    <div class="test-list-box">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul class="test-list">
          <li v-for="(item,index) in successOrderList" :key="index">
            <div class="left-info">
              <div @click="jump(item.orderCode)">
              <p>检测单号： {{item.orderCode}}</p>
              <p>被检测人：<span>{{item.userName}}</span><span>{{item.userGender}}</span><span>{{item.userAge}}岁</span></p>
              <p>提交时间： {{item.gmtModify | formatterDateTime}}</p>
              </div>
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
      </van-pull-refresh>
    </div>
    
  </div>
</template>

<script>
import Top from 'Module/Top'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      isLoading: false,
      successOrderList: [],
      searchName: '',
      pageCount: 1
    };
  },
  components:{
    Top,
    TopBg
  },
  methods:{
    //下拉刷新
    onRefresh() {
      this.pageCount++;
      this.getOrderList()
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    //获取检测列表
    getOrderList(name){
      this.$axios({
        method: "post",
        url: "order/orderList",
        data: {
          orderStatus: 1,
          pageNum: 1,
          pageSize: this.pageCount*10,
          staffCode: localStorage.getItem("staffCode"),
          userName: name || ''
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
    //查询订单
    searchOrder(){
      if(this.searchName != ''){
        this.getOrderList(this.searchName)
      }else{
        this.getOrderList()
      }
    },
    jump(orderCode){
      location.href="https://h.hfieta.com/hps/#/TestReport?orderCode="+orderCode;
    }
  },
  mounted(){
    this.getOrderList()
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/healthTest.scss";
</style>
<style>
.van-toast{
  font-size: 32px;
  line-height: unset
}
.van-toast--text{
  padding: 6px 20px;
}
</style>