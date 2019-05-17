<!-- 全部客户 -->
<template>
  <div class="myClient-list">
    <!-- <table width="100%">
      <thead>
        <tr>
          <th width="25%">姓名</th>
          <th width="15%">性别</th>
          <th width="15%">年龄</th>
          <th width="25%">身高/体重</th>
          <th width="20%">累计检测</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in myClientList" :key="index" @click="jump(item)">
          <td width="25%">{{item.userName || '-'}}</td>
          <td width="15%">{{item.userGender || '-'}}</td>
          <td width="15%">{{item.userAge || '-'}}</td>
          <td width="25%">{{item.userHeight || '-'}}/{{item.userWeight || '-'}}</td>
          <td width="20%">{{item.totalOrderNum || '-'}}</td>
        </tr>
      </tbody>
    </table> -->
    <div class="t-head">
      <div style="width:25%;">姓名</div>
      <div style="width:15%;">性别</div>
      <div style="width:15%;">年龄</div>
      <div style="width:25%;">身高/体重</div>
      <div style="width:20%;">累计检测</div>
    </div>
    <div class="t-body">
      <div v-for="(item,index) in myClientList" :key="index" @click="jump(item)">
        <div style="width:25%;">{{item.userName || '-'}}</div>
        <div style="width:15%;">{{item.userGender || '-'}}</div>
        <div style="width:15%;">{{item.userAge || '-'}}</div>
        <div style="width:25%;">{{item.userHeight || '-'}}/{{item.userWeight || '-'}}</div>
        <div style="width:20%;">{{item.totalOrderNum || '-'}}</div>
      </div>
    </div>
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
          customerType: "",
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
<style lang='scss'>
.van-tabs{
  margin-top: 40vw;
}
.van-tabs--line .van-tabs__wrap{
  position: fixed;
  top: 49vw;
  z-index: 1;
}
</style>