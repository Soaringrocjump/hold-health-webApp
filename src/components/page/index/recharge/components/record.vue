<!-- 充值记录 -->
<template>
  <div class="record">
    <ul>
      <li v-for="(item,index) in recordList" :key="index">
        <dl>
          <dt>用户充值{{item.payAmount || '-'}}元，可检测{{item.actNums || '-'}}次</dt>
          <!-- <dt>{{item.content || '-'}}</dt> -->
          <dd v-if="item.payTime">{{item.payTime | formatterDateTime}}</dd>
          <dd v-else>-</dd>
        </dl>
        <span>{{item.payAmount || '-'}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recordList:[
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
  methods:{
    //获取充值记录
    getRecord(){
      this.show = true
      this.$axios({
        method: "post",
        url: "reCharge/reChargeList",
        data: {
          pageNum: 0,
          pageSize: 0,
          staffCode: localStorage.getItem("staffCode")
        }
      })
        .then(result => {
          console.log('充值记录',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            this.recordList = msg.list
          }else{
            console.log(result.data.message)
          }
        })
        .catch(err => {
          alert("服务器连接繁忙！");
          console.log("错误：获取充值记录数据异常" + err);
        });
    },
  },
  mounted(){
    this.getRecord()
  }
}

</script>
<style lang='' scoped>
</style>