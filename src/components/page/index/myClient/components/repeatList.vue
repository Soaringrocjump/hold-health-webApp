<!-- 复检客户 -->
<template>
  <div class="myClient-list">
    <table width="100%">
      <tr>
        <!-- <th></th> -->
        <th width="25%">姓名</th>
        <th width="15%">性别</th>
        <th width="15%">年龄</th>
        <th width="25%">复检时间</th>
        <th width="20%">复检天数</th>
      </tr>
      <tr v-for="(item,index) in myClientList" :key="index" @click="jump(item)">
        <!-- <td width="10%"><span v-if="item.isReExamition == 0" class="repeat"><img src="~IMG/myClient-repeat.png" alt=""></span></td> -->
        <td>{{item.userName || '-'}}</td>
        <td>{{item.userGender || '-'}}</td>
        <td>{{item.userAge || '-'}}</td>
        <td>{{item.nextDate.substr(0,10) || '-'}}</td>
        <td>{{item.isReExamitionDate || '-'}}</td>
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
          alert("服务器连接繁忙！");
          console.log("错误：获取数据异常" + err);
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