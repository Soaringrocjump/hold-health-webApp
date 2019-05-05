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
          <input type="text" placeholder="输入客户或订单号点击查询">
        </div>
        <div class="right-btn">查 询</div>
      </div>
    </div>
    <ul class="test-list">
      <li v-for="(item,index) in orderList" :key="index">
        <div class="left-info">
          <a :href="'https://h.guanqi2019.com/func/hrs/#/TestHealthDetail?orderCode='+item.orderCode" >
          <p>检测单号： {{item.orderCode}}</p>
          <p>申请检测人：<span>{{item.userName}}</span><span>{{item.userGender}}</span><span>{{item.userAge}}岁</span></p>
          <p>提交时间： {{item.gmtModify | formatterDateTime}}</p>
          </a>
          <div class="test-tag">
            <span  v-if="item.orgCode == 'cpic'">
              <img src="~IMG/hold-health-tag1.png" alt="">
            </span>
            <span v-if="item.orgCode == 'cntp'">
              <img src="~IMG/hold-health-tag2.png" alt="">
            </span>
            <span @click="popOut">
              <img src="~IMG/hold-health-info.png" alt="">
            </span>
          </div>
        </div>
        <div class="right-item" @click="displayDate(item)">
          <a :href="'https://h.guanqi2019.com/func/hrs/#/TestHealthDetail?orderCode='+item.orderCode+'&userName='+item.userName+'&userAge='+item.userAge+'&gmtModify='+item.gmtModify" >
            <img src="~IMG/hold-health-test-item.png" alt="">
          </a>
        </div>
      </li>
    </ul>
    <van-loading v-if="show" type="spinner" color="white" />
    <div class="pop-up-bg" v-if="visible">
      <div class="pop-up-frame">
        <div class="frame-cont">
          <div class="frame-up">
            <h2>客户扫码</h2>
            <p>请扫描二维码进行身份信息输入</p>
          </div>
          <div class="qrcode-box">
            <img src="~IMG/QR-code.png" alt="">
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
      show: true,
      orderList: []
    };
  },
  components:{
    Top,
    TopBg
  },
  methods:{
    //获取检测列表
    getOrderList(){
      this.show = true
      this.$axios({
        method: "post",
        url: "order/orderList",
        data: {
          orderStatus: 0,
          pageNum: 0,
          pageSize: 0,
          staffCode: localStorage.getItem("staffCode")
          // staffCode: 'TESTS81'
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
    //调用原生app加的方法
    displayDate(val){
      console.log('调用原生app加的方法')
        // document.getElementById("demo").innerHTML=Date();
        var orderCode = val.orderCode,
            userName = val.userName,
            userAge = val.userAge,
            gmtModify = this.formatterDateTime(val.gmtModify);
        var paramsObj = {
          orderCode: val.orderCode,
          userName: val.userName,
          userAge: val.userAge,
          gmtModify: this.formatterDateTime(val.gmtModify)
        } 
        console.log('传递参数',paramsObj)  
        var paramsJson = JSON.stringify(paramsObj)
        console.log('传递json',paramsJson)
        this.$bridge.callhandler('HealthMonitoring', paramsJson, (data) => {

            alert("返回数据：",data)

        })
        // this.setupWebViewJavascriptBridge(function(bridge){
        //   console.log("调用setupWebViewJavascriptBridge")
        //     bridge.callHandler('HealthMonitoring', paramsJson, function responseCallback(responseData) {
        //       console.log("JS received response:", responseData)
        //     });
        // });
    },
    //申明交互
    // setupWebViewJavascriptBridge(callback) {
    //     console.log("进入setupWebViewJavascriptBridge")
    //     if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    //     if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    //     window.WVJBCallbacks = [callback];
    //     var WVJBIframe = document.createElement('iframe');
    //     WVJBIframe.style.display = 'none';
    //     WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    //     document.documentElement.appendChild(WVJBIframe);
    //     setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    // },

    //弹出弹框
    popOut(){
      this.visible = true
    },
    //取消弹框
    cancel(){
      this.visible = false
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