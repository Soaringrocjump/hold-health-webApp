<!-- 复检客户 -->
<template>
  <div class="myClient-list">
    <table width="100%">
      <tr>
        <th></th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>复检时间</th>
        <th>复检天数</th>
      </tr>
      <tr v-for="(item,index) in myClientList" :key="index" @click="jump(item)">
        <td width="10%"><span v-if="item.isReExamition == 0" class="repeat"><img src="~IMG/myClient-repeat.png" alt=""></span></td>
        <td width="15%">{{item.userName}}</td>
        <td width="15%">{{item.userGender}}</td>
        <td width="15%">{{item.userAge}}</td>
        <td width="25%">{{item.nextDate}}</td>
        <td width="20%">{{item.isReExamitionDate}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myClientList:[]
    };
  },
  methods:{
    //获取检测列表
    getCustomerList(){
      this.$axios({
        method: "post",
        url: "customer/getList",
        data: {
          customerType: "复检客户",
          pageNum: 0,
          pageSize: 0,
          staffCode: localStorage.getItem("staffCode")
        }
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            this.myClientList = msg.list
            console.log(this.myClientList);
          }else{
            console.log(result.data.message)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    jump(val){
      this.$router.push({
        path: '/clientInfo',
        query:{
          wxOpenid: val.wxOpenid
        }
      })
    }
  },
  mounted(){
    this.getCustomerList()
  }
}

</script>
<style lang='' scoped>
</style>