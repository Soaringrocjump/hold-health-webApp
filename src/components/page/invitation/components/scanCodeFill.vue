<!-- 面对面扫码信息输入 -->
<template>
  <div class="scanCodeFill">
    <TopBg>
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
    </TopBg>
    <div class="invitation-info">客户信息登记</div> 
    <div class="fill-info">
      <dl>
        <dt>您的专属健康专员工号</dt>
        <dd><input type="text" class="disabled-input" placeholder="" :value="staffCode" disabled></dd>
      </dl>
      <dl>
        <dt>姓名<span class="nes">*</span></dt>
        <dd><input type="text" v-model="userName" placeholder="请输入您的姓名"></dd>
      </dl>
      <dl>
        <dt>性别<span class="nes">*</span></dt>
        <dd>
          <span class="arrow"><img src="~IMG/down.png" alt=""></span>
          <select v-model="userGender">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>生日<span class="nes">*</span></dt>
        <dd>
          <input type="text" placeholder="请输入您的生日" :value="selBirth | formatterDate" readonly="readonly" @click="birthSelect">
        </dd>
      </dl>
      <dl>
        <dt>身高（厘米 cm）<span class="nes">*</span></dt>
        <dd><input type="text" v-model="userHeight" placeholder="请输入您的身高"></dd>
      </dl>
      <dl>
        <dt>体重（公斤 kg）<span class="nes">*</span></dt>
        <dd><input type="text" v-model="userWeight" placeholder="请输入您的体重"></dd>
      </dl>
      <dl>
        <dt>民族<span class="nes">*</span></dt>
        <dd>
          <span class="arrow"><img src="~IMG/down.png" alt=""></span>
          <select v-model="userNation">
            <option v-for="(item,index) in nation" :key="index" :value="item">{{item}}</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>常住地<span class="nes">*</span></dt>
        <dd>
          <input type="text" placeholder="省市区选择" :value="selArea" readonly="readonly" @click="areaSelect">
        </dd>
      </dl>
      <div class="confirmBtn" @click="submit">确认</div>
    </div>
    <van-popup v-model="show1" position="bottom" :overlay="true">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @cancel="show1 = false" 
        @confirm="onConfirm" 
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <van-popup v-model="show2" position="bottom" :overlay="true">
      <van-area :area-list="areaList" :columns-num="3" @cancel="show2 = false" @confirm="onConfirm2" @change="onChange2" title="请先选择地址" />
    </van-popup>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
import areaData from '@/assets/js/area'
export default {
  data () {
    return {
      show1: false,
      show2: false,
      currentDate: new Date(),
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(),
      staffCode: 'tests81',
      userName: '',
      userGender: '',
      selBirth: '',
      userHeight: '',
      userWeight: '',
      userNation: '',
      nation:["汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族",
            "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族",
            "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族",
            "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"],
      areaList: areaData,
      selArea: ''
    };
  },
  components:{
    TopBg
  },
  methods:{
    //点击生日
    birthSelect(){
      this.show1 = true
    },
    //生日确认
    onConfirm(val){
      console.log('确认',val)
      this.show1 = false
      this.selBirth = val
    },
    //点击省市区
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
      this.selArea = areaArr.join('-')
      this.show2 = false
    },
    onChange2(picker){
      let val = picker.getValues();
      console.log(val)
    },
    submit(){
      console.log('提交信息')
      console.log('userName',this.userName)
      console.log('userGender',this.userGender)
      console.log('selBirth',this.selBirth)
      console.log('selArea',this.selArea)
      console.log('userHeight',this.userHeight)
      console.log('userWeight',this.userWeight)
      console.log('userNation',this.userNation)
      if(
        this.staffCode !== '' &&
        this.userName !== '' &&
        this.userGender !== '' &&
        this.selBirth !== '' &&
        this.selArea !== '' &&
        this.userHeight !== '' &&
        this.userWeight !== '' &&
        this.userNation !== ''
      ){
        console.log("输入完成")
        this.$axios({
          method: "post",
          url: "order/orderEdit",
          data: {
            staffCode: this.staffCode,
            userName: this.userName,
            userGender: this.userGender,
            selBirth: this.selBirth,
            selArea: this.selArea,
            userHeight: this.userHeight,
            userWeight: this.userWeight,
            userNation: this.userNation
          }
        })
          .then(result => {
            console.log('result',result);
            if (result.data.resultCode == "200"){
            }else{
              alert(result.data.message)
            }
          })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });
      }else{
        alert("请将信息填写完整！")
      }
    },
    getQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
  },
  mounted(){
    let orderCode = this.$route.query.orderCode
    console.log("获取地址栏参数",orderCode)
  }
}

</script>
<style lang='scss'>
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
</style>