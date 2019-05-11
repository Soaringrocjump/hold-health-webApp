<!-- 客户信息模块 -->
<template>
  <div class="clientInfo-page">
    <TopBg gray>
      <PersonTop title="客户信息" hasBack hasMore/>
    </TopBg>
    <div class="clientInfo-panel">
      <div class="clientInfo-card">
        <div class="clientInfo-card-up">
          <div class="head-info">
            <div class="head">
              <img src="~IMG/userHead.png" alt="">
            </div>
            <h2>{{customerInfo.userName}}</h2>
            <h3>{{customerInfo.userGender}}</h3>
          </div>
          <div class="type">
            <img v-if="customerInfo.customerType == '准客户'" src="~IMG/clientInfo-type-zhun.png" alt="">
            <img v-if="customerInfo.customerType == '签单客户'" src="~IMG/clientInfo-type-sign.png" alt="">
            <img v-if="customerInfo.customerType == '一般客户'" src="~IMG/clientInfo-type-general.png" alt="">
            <img v-if="customerInfo.customerType == '无效客户'" src="~IMG/clientInfo-type-invalid.png" alt="">
          </div>
        </div>
        <div class="clientInfo-card-down">
          <div class="info-left">
            <p>身高：{{customerInfo.userHeight}} 厘米</p>
            <p>民族：{{customerInfo.userNation | matchNation}}</p>
            <!-- <p>联系电话：{{customerInfo.telephone}}</p> -->
            <p>常住地：{{customerInfo.userAddress}}</p>
            <p>复检时间：{{customerInfo.nextDate && customerInfo.nextDate.substr(0,10)}}</p>
          </div>
          <div class="info-right">
            <p>体重：{{customerInfo.userWeight}} 公斤</p>
            <p>年龄：{{customerInfo.userAge}} 岁</p>
          </div>
          <div class="revise" @click="changeInfo">
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
                <span><big>0</big><small>次</small></span>
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
                <span><big>0</big><small>次</small></span>
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
          <li v-for="(item,index) in customerInfo.orderList" :key="index">{{item.payTime | formatterDateTime}}，健康在手健康检测1次。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PersonTop from 'Module/PersonTop'
import Title from 'Module/Title'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      wxOpenid: '',
      customerInfo: '',
      checked: '一般客户'
    };
  },
  components:{
    PersonTop,
    Title,
    TopBg
  },
  methods:{
    getCustomerInfo(val){
      this.$axios({
        method: "post",
        url: "customer/get?wxOpenid="+val,
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            this.customerInfo = msg
          }else{
            console.log(result.data.message)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    changeInfo(){
      // this.show = true;
      this.$router.push({
        path: '/infoModify',
        query:{
          id: this.customerInfo.id,
          userName: this.customerInfo.userName,
          userGender: this.customerInfo.userGender,
          userHeight: this.customerInfo.userHeight,
          userWeight: this.customerInfo.userWeight,
          userAge: this.customerInfo.userAge,
          userBirthday: this.customerInfo.userBirthday,
          userAddress: this.customerInfo.userAddress,
          userNation: this.customerInfo.userNation,
          customerType: this.customerInfo.customerType,
          customerCode: this.customerInfo.customerCode
        }
      })
    }
    
  },
  mounted(){
    let wxOpenid = this.$route.query.wxOpenid
    console.log('传参wxOpenid',wxOpenid)
    this.wxOpenid = wxOpenid
    this.getCustomerInfo(wxOpenid)
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/myClient.scss";
</style>