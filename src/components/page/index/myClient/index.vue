<!-- 我的客户模块 -->
<template>
  <div class="myClient-page">
    <Top title="我的客户" theme="black" hasBg/>
    <!-- <a href="https://www.baidu.com">打开外部链接测试</a> -->
    <div class="myClient-banner">
      <img src="~IMG/myClient-banner.png" alt="">
    </div>
    <div class="myClient-filter">
      <div class="myClient-search">
        <div class="left-input">
          <i class="iconfont icon-xiazai17"></i>
          <input type="text" placeholder="输入客户姓名点击查询按钮">
        </div>
        <div class="right-btn">查 询</div>
      </div>
      <div class="myClient-tab">
        <dl v-for="(item,index) in myClientType" :key="index" :class="[item.type == selType ? 'active' : '']" @click="handle(item.type)">
          <dt>
            <img :src="item.icon" alt="">
          </dt>
          <dd>{{item.type}}</dd>
        </dl>
      </div>
    </div>
    <allList v-show="selType == '全部客户'"/>
    <repeatList v-show="selType == '复检客户'"/>
    <followList v-show="selType == '准客户'"/>
    <signingList v-show="selType == '签单客户'"/>
  </div>
</template>

<script>
import Top from 'Module/Top'
import allList from './components/allList'
import repeatList from './components/repeatList'
import followList from './components/followList'
import signingList from './components/signingList'
export default {
  data () {
    return {
      selType: '全部客户',
      myClientType:[
        {
          type: '全部客户',
          icon: require('@/assets/img/myClient-tab1.png')
        },
        {
          type: '复检客户',
          icon: require('@/assets/img/myClient-tab2.png')
        },
        {
          type: '准客户',
          icon: require('@/assets/img/myClient-tab3.png')
        },
        {
          type: '签单客户',
          icon: require('@/assets/img/myClient-tab4.png')
        }
      ]
    };
  },
  components:{
    Top,
    allList,
    repeatList,
    followList,
    signingList
  },
  methods:{
    handle(val){
      this.selType = val
    }
  }
}

</script>
<style lang='scss' >
@import "@/assets/style/myClient.scss";
</style>