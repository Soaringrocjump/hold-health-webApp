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
        <!-- <dl v-for="(item,index) in myClientType" :key="index" :class="[item.type == selType ? 'active' : '']" @click="handle(item.type)">
          <dt>
            <img :src="item.icon" alt="">
          </dt>
          <dd>{{item.type}}</dd>
        </dl> -->
        <dl v-for="(item,index) in myClientType" :key="index" >
          <dt>
            <img :src="item.icon" alt="">
          </dt>
        </dl>
      </div>
      <van-tabs v-model="active" color="#0344b9" title-active-color="#0344b9"  swipeable>
        <van-tab title="全部客户">
          <allList />
        </van-tab>
        <van-tab title="复检客户">
          <repeatList />
        </van-tab>
        <van-tab title="准客户">
          <followList />
        </van-tab>
        <van-tab title="签单客户">
          <signingList />
        </van-tab>
      </van-tabs>
    </div>
    
    <!-- <allList v-show="selType == '全部客户'"/>
    <repeatList v-show="selType == '复检客户'"/>
    <followList v-show="selType == '准客户'"/>
    <signingList v-show="selType == '签单客户'"/> -->
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
      active: 0,
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
.van-tabs--line .van-tabs__wrap {
  height: 21vw;
  z-index: 0;
  .van-tab{
    font-size: 26px;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  .van-tabs__line{
    height: 10px;
    border-radius: 0;
  }
  .van-tabs__nav{
    background: transparent;
  }
}
.van-tabs--line{
  padding-top: 21.1vw;
}
.van-tabs {
  margin-top: -13vw;
}
.van-hairline--top-bottom:after {
    border: none;
}
@import "@/assets/style/myClient.scss";
</style>