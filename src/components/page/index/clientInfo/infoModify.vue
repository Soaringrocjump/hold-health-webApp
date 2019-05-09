<!-- 客户信息修改 -->
<template>
  <div class="infoModify-page">
    <Top2 title="客户基本信息修改"/>
    <ul class="info-form">
      <li>
        <h3>姓名<span class="nes">*</span></h3>
        <input type="text" v-model="userName">
      </li> 
      <li>
        <h3>性别<span class="nes">*</span></h3>
        <!-- <input type="text" v-model="userGender">  -->
        <select v-model="userGender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </li>
      <li>
        <h3>身高(cm)<span class="nes">*</span></h3>
        <input type="text" v-model="userHeight">
      </li>
      <li>
        <h3>体重(kg)<span class="nes">*</span></h3>
        <input type="text" v-model="userWeight">
      </li>
      <li>
        <h3>年龄<span class="nes">*</span></h3>
        <input type="text" v-model="userAge">
      </li>
      <li>
        <h3>民族<span class="nes">*</span></h3>
        <!-- <input type="text" v-model="userNation"> -->
        <!-- <input type="text" :value="userNation | matchNation" readonly="readonly" @click="nationSelect"> -->
        <select v-model="userNation">
          <option v-for="(item,index) in nation" :key="index" :value="item.code">{{item.name}}</option>
        </select>
      </li>
      <!-- <li>
        <h3>联系电话:</h3>
        <input type="text" v-model="telephone">
      </li> -->
      <li>
        <h3>常住地<span class="nes">*</span></h3>
        <input type="text" v-model="userAddress" readonly="readonly" @click="areaSelect">
      </li>
    </ul>
    <dl>
      <dt>客户类型选择</dt>
      <dd>
        <van-radio-group v-model="customerType">
          <van-radio name="一般客户" checked-color="#ac0b00">一般客户</van-radio>
          <van-radio name="准客户" checked-color="#ac0b00">准客户</van-radio>
          <van-radio name="签单客户" checked-color="#ac0b00">签单客户</van-radio>
          <van-radio name="无效客户" checked-color="#ac0b00">无效客户</van-radio>
        </van-radio-group>
      </dd>
    </dl>
    <div class="confirmBtn" @click="confirm">确 认</div>
    <!-- <van-popup v-model="show1" position="bottom" :overlay="true" :close-on-click-overlay="false">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup> -->
    <van-popup v-model="show2" position="bottom" :overlay="true" :close-on-click-overlay="false">
      <van-area :area-list="areaList" :columns-num="3" @cancel="show2 = false" @confirm="onConfirm2" title="请选择地址" />
    </van-popup>
  </div>
</template>

<script>
import Top2 from 'Module/Top2'
import areaData from '@/assets/js/area'
export default {
  data () {
    return {
      show2: false,
      id: '',
      userName: '',
      userGender: '',
      userHeight: '',
      userWeight: '',
      userAge: '',
      userBirthday: '',
      userAddress: '',
      customerType: '',
      customerCode: '',
      userNation: '',
      nation: JSON.parse(localStorage.getItem('nationArr')),
      areaList: areaData
    };
  },
  components:{
    Top2
  },
  methods:{
    confirm(){
      console.log('姓名',this.userName)
      console.log('性别',this.userGender)
      console.log('身高',this.userHeight)
      console.log('体重',this.userWeight)
      console.log('年龄',this.userAge)
      console.log('民族',this.userNation)
      // console.log('手机',this.telephone)
      console.log('常住地',this.userAddress)
      console.log('生日',this.userBirthday)
      let thisYear = new Date().getFullYear()
      let birthYear = thisYear - this.userAge
      let userBirthday = birthYear+this.userBirthday.substr(4)
      console.log('新生日',userBirthday)
      console.log('客户类型',this.customerType)
      console.log('客户编号',this.customerCode)
      this.$axios({
        method: "post",
        url: "customer/edit",
        data:{
          id: this.id,
          staffCode: localStorage.getItem('staffCode'),
          userName: this.userName,
          userGender: this.userGender,
          userHeight: this.userHeight,
          userWeight: this.userWeight,
          userAge: this.userAge,
          userBirthday: userBirthday,
          userNation: this.userNation,
          // telephone: this.telephone,
          userAddress: this.userAddress,
          customerType: this.customerType,
          customerCode: this.customerCode
        }
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            // var msg = result.data.data
            // this.getCustomerInfo(this.wxOpenid)
            // this.show = false
            this.$router.go(-1)
          }else{
            alert(result.data.message)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    // nationSelect(){
    //   this.show1 = true
    // },
    //省市区选择
    areaSelect(){
      this.show2 = true
    },
    //省市区确认
    onConfirm2(val){
      console.log('确认',val)
      let areaArr = []
      val.forEach(el => {
        areaArr.push(el.name)
      });
      console.log("areaArr",areaArr)
      this.userAddress = areaArr.join('')
      this.show2 = false
    },
  },
  mounted(){
    this.id = this.$route.query.id,
    this.userName = this.$route.query.userName,
    this.userGender = this.$route.query.userGender,
    this.userHeight = this.$route.query.userHeight,
    this.userWeight = this.$route.query.userWeight,
    this.userAge = this.$route.query.userAge,
    this.userBirthday = this.$route.query.userBirthday,
    this.userAddress = this.$route.query.userAddress,
    this.userNation = this.$route.query.userNation,
    this.customerType = this.$route.query.customerType,
    this.customerCode = this.$route.query.customerCode
    
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/myClient.scss";
</style>
<style lang="scss">
.infoModify-page{
  .van-cell{
    padding: 0;
    line-height: normal;
    font-size: 26px;
  }
  .van-picker__toolbar{
    height: 80px;
    line-height: 80px;
    font-size: 36px;
  }
  .van-picker__cancel, .van-picker__confirm {
    font-size: 36px;
  }
  .van-picker__title {
    font-size: 36px;
  }
  .van-picker-column {
    font-size: 36px;
  }
  .van-picker__columns{
    height: 80px;
    line-height: 80px;
  }
  .van-cell:not(:last-child):after {
    border-bottom: 0;
  }
  .van-radio-group{
    display: flex;
    flex-wrap: wrap;
    .van-radio{
      width: 50%;
      margin-top: 20px;
      .van-radio__icon, .van-radio__label{
        line-height: 45px;
      }
      .van-radio__icon{
        height: 45px;
        line-height: 45px;
        .van-icon{
          width: 45px;
          height: 45px;
          line-height: 45px;
          font-size: 32px;
        }
      }
      .van-radio__label{
        color: #a0a0a0;
        margin-left: 25px;
      }
    }
  }
}

</style>
