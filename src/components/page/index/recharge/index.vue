<!-- 充值记录 -->
<template>
  <div class="recharge-page">
    <div class="recharge-top">
      <!-- <TopBg>
        <PersonTop title="充值记录" hasBack hasMore/>
      </TopBg> -->
      <TopBg>
        <Top title="充值记录"  theme="white"/>
      </TopBg>
      <div class="recharge-panel">
        <div class="recharge-card">
          <div class="recharge-card-up">
            <div class="head" @click="popOut">
              <img src="~IMG/recharge-head.png" alt="">
            </div>
            <div class="count">
              <p>您当前已累计充值：{{basicInfo.rechargeTotal}} 元</p>
              <p>可用检测次数：{{basicInfo.deviceNums}} 次</p>
              <p>截止有效期：{{basicInfo.deviceExp | formatterDate}} (过期清零)</p>
              
            </div>
          </div>
          <div class="recharge-card-down">
            <div v-for="(item,index) in recharge" :key="index" :class="[item == selBtn ? 'active' : '']" @click="handle(item)">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
    
    <record v-show="selBtn == '充值记录'"/>
    <recharge v-show="selBtn == '立即充值'"/>
    <div class="pop-up-bg" v-if="visible">
      <div class="pop-up-frame">
        <div class="frame-cont">
          <dl>
            <dt>使用权</dt>
            <dd>健康专员拥有设备使用权，健康专员要严格按照各机构要求使用“健康在手”。请妥善保管设备，如不按规定使用设备，公司或机构有权收回设备。</dd>
          </dl>
          <dl>
            <dt>所有权</dt>
            <dd>健康专员在规定的时间内累计充值达到1200元以后，设备的的所有权归健康专员所有。拥有所有权以后，检测资费更加优惠，充值更加灵活。</dd>
          </dl>
        </div>
        <div class="frame-close" @click="cancel">关闭</div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonTop from 'Module/PersonTop'
import Top from 'Module/Top'
import TopBg from 'Module/TopBg'
import record from './components/record'
import recharge from './components/recharge'
export default {
  data () {
    return {
      basicInfo: JSON.parse(localStorage.getItem('basicInfo')),
      selBtn: '充值记录',
      recharge:['充值记录','立即充值'],
      visible: false
    };
  },
  components:{
    PersonTop,
    TopBg,
    Top,
    record,
    recharge
  },
  methods:{
    //切换
    handle(val){
      console.log("点击",val)
      this.selBtn = val
    },
    //弹出弹框
    popOut(){
      this.visible = true
    },
    //取消弹框
    cancel(){
      this.visible = false
    }
  }
}

</script>
<style lang='scss'>
@import "@/assets/style/recharge.scss";
</style>