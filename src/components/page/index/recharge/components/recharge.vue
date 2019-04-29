<!-- 立即充值 -->
<template>
  <div class="recharge">
    <h2>请选择套餐</h2>
    <ul class="recharge-package">
      <li v-for="(item,index) in recharge" :key="index">
        <div :class="[item.checked ? 'package-price-checked': 'package-price']">¥ {{item.amount}}</div>
        <div class="package-chose" @click="check(item)">
          <div class="privilege">{{item.privilege}}</div>
          <div :class="[ item.checked ? 'checked' : 'check']" >
            <img v-if="item.checked" src="~IMG/recharge-check.png" alt="">
          </div>
        </div>
      </li>
    </ul>
    <p class="tips">温馨提示：公司同步充值金额次日到账，系统自动核对无误后，检测次数自动累加，请注意查收。</p>
    <div class="confirmBtn">确认充值</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recharge:[
        {
          amount: 10,
          checked: false,
          privilege: '单次检测费用下调至10元/次。'
        },
        {
          amount: 100,
          checked: false,
          privilege: '业务员充值100元，公司同等充值100元，30天之内检测次数达到20次。'
        },
        {
          amount: 200,
          checked: false,
          privilege: '业务员充值200元，公司同等充值200元，30天之内检测次数达到60次。'
        },
        {
          amount: 300,
          checked: false,
          privilege: '业务员充值300元，公司同等充值300元，30天之内检测次数达到120次。'
        },
        {
          amount: 1200,
          checked: true,
          privilege: '业务员充值1200元，公司同等充值1200元，365天之内检测次数达到720次。'
        },
      ]
    };
  },
  methods:{
    check(val){
      this.recharge.forEach(el => {
        el.checked = false
      });
      val.checked = true;
    }
  }
}

</script>
<style lang='' scoped>
</style>