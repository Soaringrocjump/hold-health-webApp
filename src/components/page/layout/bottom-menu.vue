<!-- 底部导航 -->
<template>
  <div class="wrapper">
    <div class="bottom-menu">
      <dl :class="[isActive == 'index' ? 'active' : '']" @click="handle('index')">
        <dt>
          <i class="iconfont icon-shouye"></i>
        </dt>
        <dd>首页</dd>
      </dl>
      <dl :class="[isActive == 'orders' ? 'active' : '']" @click="handle('orders')">
        <dt>
          <i class="iconfont icon-leimupinleifenleileibie2"></i>
        </dt>
        <dd>订单</dd>
      </dl>
      <dl class="center">
        <dt>
          <img src="~IMG/menu-plus.png" alt="">
        </dt>
        <dd>我要邀约</dd>
      </dl>
      <dl :class="[isActive == 'purchase' ? 'active' : '']" @click="handle('purchase')">
        <dt>
          <i class="iconfont icon-gouwuche"></i>
        </dt>
        <dd>采购</dd>
      </dl>
      <dl :class="[isActive == 'personal' ? 'active' : '']" @click="handle('personal')">
        <dt>
          <i class="iconfont icon-wode-"></i>
        </dt>
        <dd>我的</dd>
      </dl>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: 'index'
    };
  },
  methods:{
    handle(path){
      console.log('path',path)
      this.isActive = path
      this.$router.push({
        path: '/menu/'+path
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.wrapper{
  padding-bottom: 160px;
  .bottom-menu{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 135px;
    padding-bottom: 26px;
    background: #fff;
    z-index: 99;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    dl{
      min-width: 60px;
      text-align: center;
      color: #bbb;
      dt{
        i{
          font-size: 48px;
        }
      }
      dd{
        font-size: 25px;
      }
    }
    .center{
      dt{
        width: 136px;
        height: 136px;
        background: #fff;
        border-radius: 136px;
      }
    }
    dl.active{
      color: #086BFF;
      dt i{
        background-image: -webkit-linear-gradient( #1228F6 , #337BFF , #33B0FF );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

</style>