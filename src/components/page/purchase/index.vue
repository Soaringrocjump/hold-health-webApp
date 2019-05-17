<!-- 采购模块
<template>
  <div class="purchase-page">
    <div class="shopping-cart-empty">
      <p>
        <i class="iconfont icon-gouwuche1"></i>
        <span>购物车是空的</span>
      </p>
      <div class="go-purchase">去采购</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/purchase.scss";
</style> -->
<!-- 我的客户模块 -->
<template>
  <div class="myClient-page menuClient-page">
    <div class="fix-top">
      <TopBg>
        <MenuTop title="我的客户" theme="white" />
      </TopBg>
      <!-- <div class="myClient-banner">
        <img src="~IMG/myClient-banner.png" alt="">
      </div> -->
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
        
      </div>
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
    <!-- <allList v-show="selType == '全部客户'"/>
    <repeatList v-show="selType == '复检客户'"/>
    <followList v-show="selType == '准客户'"/>
    <signingList v-show="selType == '签单客户'"/> -->
  </div>
</template>

<script>
import MenuTop from 'Module/MenuTop'
import TopBg from 'Module/TopBg'
import allList from '@/components/page/index/myClient/components/allList'
import repeatList from '@/components/page/index/myClient/components/repeatList'
import followList from '@/components/page/index/myClient/components/followList'
import signingList from '@/components/page/index/myClient/components/signingList'
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
    MenuTop,
    TopBg,
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
.menuClient-page{
  .van-tabs--line .van-tabs__wrap {
    height: 21vw;
    z-index: 0;
    position: fixed;
    top: 36vw;
    z-index: 1;
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
  .van-tabs__content{
    margin-top: 61vw;
  }
}

@import "@/assets/style/myClient.scss";
</style>