<!-- 全部客户 -->
<template>
  <div class="myClient-list">
    <table width="100%">
      <tr>
        <th></th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>常驻地址</th>
        <th>累计检测</th>
      </tr>
      <tr v-for="(item,index) in myClientList" :key="index" @click="jump(item)">
        <td width="10%"><span v-if="item.repeat" class="repeat"><img src="~IMG/myClient-repeat.png" alt=""></span></td>
        <td width="15%">{{item.name}}</td>
        <td width="15%">{{item.sex}}</td>
        <td width="15%">{{item.age}}</td>
        <td width="25%">{{item.address}}</td>
        <td width="20%">{{item.time}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myClientList:[
        {
          repeat: true,
          name: '徐昭君',
          sex: '男',
          age: 41,
          address: '宁波市海曙区',
          time: 1
        },
        {
          repeat: true,
          name: '宋茜',
          sex: '女',
          age: 31,
          address: '宁波市鄞州区',
          time: 1
        },
        {
          repeat: false,
          name: '王娅',
          sex: '女',
          age: 35,
          address: '宁波市高新区',
          time: 1
        }
      ]
    };
  },
  methods:{
    //获取检测列表
    getCustomerList(){
      this.$axios({
        method: "post",
        url: "order/orderList",
        data: {
          customerType: 1,
          pageNum: 1,
          pageSize: 5,
          staffCode: sessionStorage.getItem("staffCode")
        }
      })
        .then(result => {
          console.log('result',result);
          // if (result.data.resultCode == "200"){
          //   var msg = result.data.data
          //   this.successOrderList = msg.list
          //   console.log(this.orderList);
          // }else{
          //   console.log(result)
          // }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    jump(val){
      console.log('tr点击')
      this.$router.push({
        path: '/clientInfo'
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