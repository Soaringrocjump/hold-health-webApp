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
            <div class="order-top-jump" @click="jump(item.orderCode)">
              <div class="left-info">
                <div >
                <p>检测单号： {{item.orderCode}}</p>
                <p>被检测人：<span>{{item.userName}}</span><span>{{item.userGender}}</span><span>{{item.userAge}}岁</span></p>
                <p>检测时间： {{item.gmtModify | formatterDateTime}}</p>
                </div>
                
              </div>
              <dl class="right-score">
                <dt>综合评分</dt>
                <dd>{{item.orderScore}}</dd>
              </dl>
            </div>
            <div class="order-top-tag">
              <span @click="reportPush(item)">
                <img src="~IMG/report-push.png" alt="">
              </span>
              <!-- <span>
                <img src="~IMG/report-print.png" alt="">
              </span> -->
            </div>
          </li>
        </ul>
      </van-pull-refresh>
    </div>
    <van-actionsheet v-model="show" cancel-text="取消">
      <div class="sharePlat">
        <dl @click="shareWechat">
          <dt><img src="~IMG/share-wechat.png" alt=""></dt>
          <dd>微信</dd>
        </dl>
        <dl @click="shareFriendCircle">
          <dt><img src="~IMG/share-wechat-friends.png" alt=""></dt>
          <dd>朋友圈</dd>
        </dl>
        <dl @click="copyLink">
          <dt><img src="~IMG/share-copy-link.png" alt=""></dt>
          <dd>复制链接</dd>
        </dl>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
import Top from 'Module/Top'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      isLoading: false,
      show: false,
      successOrderList: [],
      searchName: '',
      pageCount: 1,
      url: 'https://h.hfieta.com/hps/#/TestReport',
      orderCode: '',
      title: '',
      desc: '观禾未来客户亚健康检测报告'
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
    //报告推送
    reportPush(val){
      this.show = true
      this.orderCode = val.orderCode
      this.title = val.userName + val.userGender + '士检测报告'
    },
    //分享微信
    shareWechat(){
      // console.log(`PushReport?url=${this.url}&orderCode=${this.orderCode}&title=${this.title}&desc=${this.desc}&type=1`)
      location.href=`PushReport?url=${this.url}&orderCode=${this.orderCode}&title=${this.title}&desc=${this.desc}&type=1`
    },
    //分享朋友圈
    shareFriendCircle(){
      // console.log(`PushReport?url=${this.url}&orderCode=${this.orderCode}&title=${this.title}&desc=${this.desc}&type=2`)
      location.href=`PushReport?url=${this.url}&orderCode=${this.orderCode}&title=${this.title}&desc=${this.desc}&type=2`
    },
    //复制链接
    copyLink(){
      let link = this.$route.fullPath;
      console.log(link)
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
          alert("服务器连接繁忙！");
          console.log("错误：获取数据异常" + err);
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
<style lang='scss'>
.van-toast{
  font-size: 32px;
  line-height: unset
}
.van-toast--text{
  padding: 6px 20px;
}
.sharePlat{
  padding: 70px 70px 40px;
  display: flex;
  dl{
    text-align: center;
    dt{
      width: 100px;
      margin: 0 auto;
    }
    dd{
      color: #323232;
      font-size: 28px;
      margin-top: 10px;
    }
  }
  dl~dl{
    margin-left: 70px;
  }
}
.van-popup--bottom{
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  .van-actionsheet__cancel{
    height: 119px;
    line-height: 119px;
    font-size: 32px;
    color: #FF3657;
  }
}
.van-pull-refresh__head{
  font-size: 26px;
}
</style>