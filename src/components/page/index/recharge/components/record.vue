<!-- 充值记录 -->
<template>
  <div class="record">
    <ul>
      <li v-for="(item,index) in record" :key="index">
        <dl>
          <dt>用户充值{{item.recharge}}元，可检测{{item.times}}次</dt>
          <dd>{{item.date}}</dd>
        </dl>
        <span>{{item.recharge}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      record:[
        {
          recharge: 1200.00,
          times: 365,
          date: '2018-09-20 11:05:42'
        },
        {
          recharge: 100.00,
          times: 5,
          date: '2018-09-18 15:05:42'
        },
        {
          recharge: 500.00,
          times: 15,
          date: '2018-09-15 11:05:42'
        },
      ]
    };
  },
}

</script>
<style lang='' scoped>
</style>