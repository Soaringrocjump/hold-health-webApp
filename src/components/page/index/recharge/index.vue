<!-- 充值记录 -->
<template>
  <div class="recharge-page">
    <TopBg>
      <PersonTop title="充值记录" hasBack hasMore/>
    </TopBg>
    <div class="recharge-panel">
      <div class="recharge-card">
        <div class="recharge-card-up">
          <div class="head">
              <img src="~IMG/recharge-head.png" alt="">
            </div>
          <div class="count">
            <p>您当前已累计充值：1300 元</p>
            <p>可用检测次数：666 次</p>
            <p>截止有效期：2018/12/27(过期清零)</p>
          </div>
        </div>
        <div class="recharge-card-down">
          <div v-for="(item,index) in recharge" :key="index" :class="[item == selBtn ? 'active' : '']" @click="handle(item)">{{item}}</div>
        </div>
      </div>
    </div>
    <record v-show="selBtn == '充值记录'"/>
    <recharge v-show="selBtn == '立即充值'"/>
  </div>
</template>

<script>
import PersonTop from 'Module/PersonTop'
import TopBg from 'Module/TopBg'
import record from './components/record'
import recharge from './components/recharge'
export default {
  data () {
    return {
      selBtn: '充值记录',
      recharge:['充值记录','立即充值'
        // {
        //   type: '充值记录',

        // },
        // {
        //   type: '立即充值',

        // }
      ]
    };
  },
  components:{
    PersonTop,
    TopBg,
    record,
    recharge
  },
  methods:{
    handle(val){
      console.log("点击",val)
      this.selBtn = val
    }
  }
}

</script>
<style lang='scss'>
@import "@/assets/style/recharge.scss";
</style>