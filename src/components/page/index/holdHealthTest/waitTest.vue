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
            <div class="order-top-jump" @click="jumpAPP(item)">
              <div class="left-info">
                <div >
                  <p>检测单号： {{item.orderCode}}</p>
                  <p>申请检测人：<span>{{item.userName}}</span><span>{{item.userGender}}</span><span>{{item.userAge}}岁</span></p>
                  <p>提交时间： {{item.gmtCreate | formatterDateTime}}</p>
                </div>
              </div>
              <div class="right-item" >
                  <img v-if="item.rowState == 9" src="~IMG/hold-health-cant-test.png" alt="">
                  <img v-else src="~IMG/hold-health-can-test.png" alt="">
              </div>
            </div>
            <div class="order-top-tag">
              <span  v-if="item.orderCode.includes('CPIC')">
                <img src="~IMG/hold-health-tag1.png" alt="">
              </span>
              <span v-if="item.orderCode.includes('CNTP')">
                <img src="~IMG/hold-health-tag2.png" alt="">
              </span>
              <span v-if="!item.orderCode.includes('CNTP') && !item.orderCode.includes('CPIC') && item.rowState == 9" @click="popOut(item)">
                <img src="~IMG/hold-health-info.png" alt="">
              </span>
              <span v-if="!item.orderCode.includes('CNTP') && !item.orderCode.includes('CPIC')" @click="cancelConfirm(item.orderCode)">
                <img src="~IMG/hold-health-cancel.png" alt="">
              </span>
            </div>
          </li>
        </ul>
      </van-pull-refresh>
    </div>
    
    <div class="pop-up-bg" v-if="visible">
      <div class="pop-up-qrcode" v-if="qrcodeDisplay">
        <div class="qrcode-cont">
          <div class="qrcode-up">
            <h2>客户扫码</h2>
            <p>请扫描二维码进行身份信息输入</p>
          </div>
          <div class="qrcode-box">
            <img :src="inviteQRCode" alt="">
          </div>
          <p>扫码后关注“健康E顾问”微信公众号</p>
          <p>按照提示完成信息输入</p>
        </div>
        <div class="qrcode-close" @click="cancel">
          <img src="~IMG/hold-health-close.png" alt="">
        </div>
      </div>
      <div class="pop-up-remark" v-if="remarkDisplay">
        <div class="remark-tit">
          <h2>客户扫码</h2>
          <i class="iconfont icon-guanbi1" @click="cancel"></i>
        </div>
        <div class="remark-cont">{{remark || '用户未备注'}}</div>
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
      qrcodeDisplay: false,
      remarkDisplay: false,
      orderList: [],
      searchName: '',
      baseImgUrl: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=',
      inviteQRCode: '',
      remark: '',
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
          alert("服务器连接繁忙！");
          console.log("错误：获取数据异常" + err);
        });
    },
    //跳app
    jumpAPP(val){
      console.log('jumpAPP',val)
      if(val.rowState != 9){
        this.$axios({
        method: "post",
        url: "order/orderBeforeScan",
        data: val
      })
        .then(result => {
          console.log('检测前result',result);
          if (result.data.resultCode == "200"){
            if(val.rowState != 9){
              let token = localStorage.getItem('authorization'),
                  orderCode = val.orderCode,
                  userName = val.userName,
                  userAge = val.userAge,
                  userGender = val.userGender,
                  gmtCreate = this.formatterDateTime(val.gmtCreate),
                  ordersn ="",
                  deviceData ="";
              console.log("跳转传参",token,orderCode,userName,userAge,userGender,gmtCreate)
              location.href=`HealthMonitoring?token=${token}&orderCode=${orderCode}&userName=${userName}&userAge=${userAge}&userGender=${userGender}&gmtModify=${gmtCreate}`
            }
          }else{
            // alert(result.data.message)
            this.$dialog.alert({
              message: result.data.message
            }).then(() => {
              // on close
            });
          }
        })
        .catch(err => {
          alert("服务器连接繁忙！");
          console.log("错误：获取数据异常" + err);
        });
      }else{
        this.visible = true
        this.qrcodeDisplay = true
        this.getAffirmQRCode(val.orderCode)
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
    //取消确认
    cancelConfirm(val){
      this.$dialog.confirm({
        title: '提示',
        message: '确定取消订单？'
      }).then(() => {
        // on confirm
        this.cancelOrder(val)
      }).catch(() => {
        // on cancel
      });
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
            // alert(result.data.message)
            this.$dialog.alert({
              message: result.data.message
            }).then(() => {
              // on close
            });
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
      this.remarkDisplay = true
      this.remark = val.remark
      console.log(this.remark)
      // this.getAffirmQRCode(val.orderCode)
    },
    //取消弹框
    cancel(){
      this.visible = false
      this.qrcodeDisplay = false
      this.remarkDisplay = false
      this.remark = ''
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
.van-dialog__header{
  font-size: 32px;
}
.van-dialog__message{
  font-size: 32px;
}
.van-button{
  font-size: 32px;
  height: 80px;
  line-height: 80px;
}
.van-pull-refresh__head{
  font-size: 26px;
}
</style>
