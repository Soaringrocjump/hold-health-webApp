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
      <tr v-for="(item,index) in myClientList" :key="index">
        <td width="10%"><span v-if="item.repeat" class="repeat"><img src="~IMG/myClient-repeat.png" alt=""></span></td>
        <td width="15%">{{item.name}}</td>
        <td width="15%">{{item.sex}}</td>
        <td width="15%">{{item.age}}</td>
        <td width="25%">{{item.date}}</td>
        <td width="20%">{{item.days}}</td>
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
          date: '2018-08-08',
          days: -100
        },
        {
          repeat: true,
          name: '宋茜',
          sex: '女',
          age: 31,
          date: '2019-02-08',
          days: -20
        },
        {
          repeat: false,
          name: '王娅',
          sex: '女',
          age: 31,
          date: '2018-09-08',
          days: -90
        }
      ]
    };
  },
}

</script>
<style lang='' scoped>
</style>