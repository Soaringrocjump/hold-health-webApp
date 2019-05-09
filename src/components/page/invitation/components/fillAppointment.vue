<!-- 填写预约信息 -->
<template>
  <div class="fillAppointment">
    <TopBg>
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
    </TopBg>
    <div class="invitation-info">客户预约登记</div> 
    <div class="gradient-txt2">
      <img src="~IMG/invitation-txt2.png" alt="">
    </div>
    <p>健康服务专员<span class="officer">{{staffCode}}</span>为您服务</p>
    <div class="fill-info">
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
        <dt>其他备注信息</dt>
        <dd><textarea type="text" v-model="remark" placeholder="请输入您的备注信息"></textarea></dd>
      </dl>
      <div class="confirmBtn" @click="submit">我要预约</div>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @cancel="show = false" 
        @confirm="onConfirm" 
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      show: false,
      currentDate: new Date(),
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(),
      staffCode: 'tests81',
      userName: '',
      userGender: '',
      selBirth: '',
      remark: ''
    };
  },
  components:{
    TopBg
  },
  methods:{
    //点击生日
    birthSelect(){
      this.show = true
    },
    //确认
    onConfirm(val){
      console.log('确认',val)
      this.show = false
      this.selBirth = val
    },
    submit(){
      console.log('提交信息')
      console.log('userName',this.userName)
      console.log('userGender',this.userGender)
      console.log('selBirth',this.selBirth)
      console.log('remark',this.remark)
      if(
        this.staffCode !== '' &&
        this.userName !== '' &&
        this.userGender !== '' &&
        this.selBirth !== ''
      ){
        console.log("输入完成")
        this.$axios({
          method: "post",
          url: "order/addOrder",
          data: {
            staffCode: this.staffCode,
            userName: this.userName,
            userGender: this.userGender,
            selBirth: this.selBirth,
            remark: this.remark
          }
        })
          .then(result => {
            console.log('result',result);
            if (result.data.resultCode == "200"){
              var msg = result.data.data
              // this.orderList = msg.list
              // this.show = false
              // console.log(this.orderList);
              this.$router.push({
                path: '',
                query: { 
                  orderCode: msg.orderCode,
                  userName: msg.userName,
                  userGender: msg.userGender,
                  postTime: msg.postTime
                }
              })
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
    }
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