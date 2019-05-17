<!-- 我的客户模块 -->
<template>
  <div class="myClient-page">
    <Top title="我的客户" theme="black" hasBg/>
    <div class="fix-top">
      <TopBg/>
      <div class="myClient-filter">
        <div class="myClient-search">
          <div class="left-input">
            <i class="iconfont icon-xiazai17"></i>
            <input type="text" v-model="userName" placeholder="输入客户姓名点击查询按钮">
          </div>
          <div class="right-btn" @click="getCustomerList">查 询</div>
        </div>
        <div class="myClient-tab">
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
  </div>
</template>

<script>
import Top from 'Module/Top'
import TopBg from 'Module/TopBg'
import allList from './components/allList'
import repeatList from './components/repeatList'
import followList from './components/followList'
import signingList from './components/signingList'
export default {
  data () {
    return {
      active: 0,
      userName: '',
      myClientType:[
        {
          icon: require('@/assets/img/myClient-tab1.png')
        },
        {
          icon: require('@/assets/img/myClient-tab2.png')
        },
        {
          icon: require('@/assets/img/myClient-tab3.png')
        },
        {
          icon: require('@/assets/img/myClient-tab4.png')
        }
      ]
    };
  },
  components:{
    Top,
    TopBg,
    allList,
    repeatList,
    followList,
    signingList
  },
  methods:{
    getCustomerList(){
      console.log("点击查询");
      this.$axios({
        method: "post",
        url: "customer/getList",
        data: {
          userName: this.userName,
          staffCode: localStorage.getItem("staffCode")
        }
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            // var msg = result.data.data
            // console.log(this.myClientList);
          }else{
            console.log(result.data.message)
          }
        })
        .catch(err => {
          alert("服务器连接繁忙！");
          console.log("错误：获取数据异常" + err);
        });
    },
  }
}

</script>
<style lang='scss' >
.myClient-page{
  .van-tabs--line .van-tabs__wrap {
    height: 21vw;
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
    margin-top: 66vw;
  }
}

@import "@/assets/style/myClient.scss";
</style>