<!-- 等待检测 -->
<template>
  <div class="waitTest">
    <div class="fix-top">
      <TopBg>
        <Top title="等待检测"  theme="white"/>
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
          <li v-for="(item,index) in orderList" :key="index">
            <div class="left-info">
              <!-- <a :href="'https://h.guanqi2019.com/func/hrs/#/TestHealthDetail?orderCode='+item.orderCode" > -->
              <div >
                <p>检测单号： {{item.orderCode}}</p>
                <p>申请检测人：<span>{{item.userName}}</span><span>{{item.userGender}}</span><span>{{item.userAge}}岁</span></p>
                <p>提交时间： {{item.gmtModify | formatterDateTime}}</p>
              </div>
              <!-- </a> -->
              <div class="test-tag">
                <span  v-if="item.orgCode == 'CPIC'">
                  <img src="~IMG/hold-health-tag1.png" alt="">
                </span>
                <span v-if="item.orgCode == 'CNTP'">
                  <img src="~IMG/hold-health-tag2.png" alt="">
                </span>
                <span @click="popOut(item)">
                  <img src="~IMG/hold-health-info.png" alt="">
                </span>
                <span v-if="item.orgCode == null" @click="cancelOrder(item.orderCode)">
                  <img src="~IMG/hold-health-cancel.png" alt="">
                </span>
              </div>
            </div>
            <div class="right-item" @click="jumpAPP(item)">
              <!-- <a :href="'https://h.guanqi2019.com/func/hrs/#/TestHealthDetail?orderCode='+item.orderCode+'&userName='+item.userName+'&userAge='+item.userAge+'&gmtModify='+item.gmtModify" > -->
                <img v-if="item.rowState == 9" src="~IMG/hold-health-cant-test.png" alt="">
                <img v-else src="~IMG/hold-health-can-test.png" alt="">
              <!-- </a> -->
            </div>
          </li>
        </ul>
      </van-pull-refresh>
    </div>
    
    <div class="pop-up-bg" v-if="visible">
      <div class="pop-up-frame">
        <div class="frame-cont">
          <div class="frame-up">
            <h2>客户扫码</h2>
            <p>请扫描二维码进行身份信息输入</p>
          </div>
          <div class="qrcode-box">
            <img :src="inviteQRCode" alt="">
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
      visible: false,
      isLoading: false,
      orderList: [],
      searchName: '',
      baseImgUrl: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=',
      inviteQRCode: '',
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
      this.show = true
      this.$axios({
        method: "post",
        url: "order/orderList",
        data: {
          orderStatus: 3,
          pageNum: 1,
          pageSize: this.pageCount*10,
          staffCode: localStorage.getItem("staffCode"),
          userName: name
        }
      })
        .then(result => {
          // console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            this.orderList = msg.list
            this.show = false
            console.log(this.orderList);
          }else{
            console.log(result.data.message)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //跳app
    jumpAPP(val){
      if(val.rowState != 9){
        var token = localStorage.getItem('authorization'),
          orderCode = val.orderCode,
          userName = val.userName,
          userAge = val.userAge,
          userGender = val.userGender,
          gmtModify = this.formatterDateTime(val.gmtModify),
          ordersn ="",
          deviceData ="";
        console.log("跳转传参",token,orderCode,userName,userAge,userGender,gmtModify)
        location.href=`HealthMonitoring?token=${token}&orderCode=${orderCode}&userName=${userName}&userAge=${userAge}&userGender=${userGender}&gmtModify=${gmtModify}`
      }
    },
    //查询订单
    searchOrder(){
      if(this.searchName != ''){
        this.getOrderList(this.searchName)
      }else{
        this.getOrderList()
      }
    },
    //取消订单
    cancelOrder(orderCode){
      this.$axios({
        method: "post",
        url: "order/orderCancel",
        data: {
          orderCode: orderCode,
          staffCode: localStorage.getItem("staffCode"),
        }
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            console.log(msg);
            this.$toast('取消订单成功');
            this.getOrderList()
          }else{
            console.log(result.data.message)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //获取二维码
    getAffirmQRCode(orderCode){
      let token = localStorage.getItem('authorization');
      this.$axios({
        method: "get",
        url: "wx/getAffirmQRCode?token="+token+"&orderCode="+orderCode ,
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            console.log(msg);
            this.inviteQRCode = this.baseImgUrl + msg
          }else{
            console.log(result)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //日期时间格式过滤
    formatterDateTime(value) {
      var formatDate = function(date, fmt) {
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds()
        };
        let padLeftZero = function(str) {
          return ('00' + str).substr(str.length);
        }
        // 遍历这个对象
        for (let k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            // console.log(`${k}`)
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
          }
        }
        return fmt;
      };
      if (!value) return ''
      return formatDate(new Date(value), 'yyyy-MM-dd hh:mm:ss')
    },
    //弹出弹框
    popOut(val){
      this.visible = true
      this.getAffirmQRCode(val.orderCode)
    },
    //取消弹框
    cancel(){
      this.visible = false
      this.inviteQRCode = ''
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
