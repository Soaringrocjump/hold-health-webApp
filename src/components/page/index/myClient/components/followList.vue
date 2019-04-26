<!-- 准客户 -->
<template>
  <div class="myClient-list">
    <table width="100%">
      <tr>
        <th></th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>常驻地址</th>
        <th>客户类型</th>
      </tr>
      <tr v-for="(item,index) in myClientList" :key="index">
        <td width="10%"><span v-if="item.repeat" class="repeat"><img src="~IMG/myClient-repeat.png" alt=""></span></td>
        <td width="15%">{{item.name}}</td>
        <td width="15%">{{item.sex}}</td>
        <td width="15%">{{item.age}}</td>
        <td width="25%">{{item.address}}</td>
        <td width="20%">
          <span class="type">
            <img src="~IMG/myClient-type-zhun.png" alt="">
          </span>
        </td>
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
          type: '准'
        },
        {
          repeat: true,
          name: '宋茜',
          sex: '女',
          age: 31,
          address: '宁波市鄞州区',
          type: '准'
        },
        {
          repeat: false,
          name: '王娅',
          sex: '女',
          age: 35,
          address: '宁波市高新区',
          type: '准'
        }
      ]
    };
  },
}

</script>
<style lang='' scoped>
</style>