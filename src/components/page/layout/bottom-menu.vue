<!-- 底部导航 -->
<template>
  <div class="wrapper">
    <div class="bottom-menu">
      <dl :class="[$route.path.endsWith('index') ? 'active' : '']" @click="handle('index')">
        <dt>
          <i class="iconfont icon-shouye"></i>
        </dt>
        <dd>首页</dd>
      </dl>
      <dl :class="[$route.path.endsWith('orders') ? 'active' : '']" @click="handle('orders')">
        <dt>
          <i class="iconfont icon-leimupinleifenleileibie2"></i>
        </dt>
        <dd>订单</dd>
      </dl>
      <dl class="center">
        <dt @click="toInvitation">
          <img src="~IMG/menu-plus.png" alt="">
        </dt>
        <dd>我要邀约</dd>
      </dl>
      <dl :class="[$route.path.endsWith('purchase') ? 'active' : '']" @click="handle('purchase')">
        <dt>
          <i class="iconfont icon-aixin1"></i>
        </dt>
        <dd>客户</dd>
      </dl>
      <dl :class="[$route.path.endsWith('personal') ? 'active' : '']" @click="handle('personal')">
        <dt>
          <i class="iconfont icon-wode-"></i>
        </dt>
        <dd>我的</dd>
      </dl>
    </div>
    <transition :name="'slide-' + (direction == 'forward' ? 'in' : 'out')">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      isActive: 'index',
      path: this.$route.path
    };
  },
  computed:{
    ...mapState({
      direction: state => state.direction,
    })
  },
  methods:{
    handle(path){
      console.log('path',path)
      console.log('router',this.$route.path)
      this.path = this.$route.path
      this.isActive = path
      this.$router.push({
        path: '/menu/'+path
      })
    },
    //发布邀约
    toInvitation(){
      this.$router.push({
        path: '/invitation'
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.wrapper{
  padding-bottom: 180px;
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
// .slide-out-enter-active,
// .slide-out-leave-active,
// .slide-in-enter-active,
// .slide-in-leave-active {
//   will-change: transform;
//   transition: all 250ms;
//   height: 100%;
//   top: 0;
//   position: absolute;
//   backface-visibility: hidden;
//   perspective: 1000;
// }

// .slide-out-enter {
//   opacity: 0;
//   transform: translate3d(-100%, 0, 0);
// }

// .slide-out-leave-active {
//   opacity: 0;
//   transform: translate3d(100%, 0, 0);
// }

// .slide-in-enter {
//   opacity: 0;
//   transform: translate3d(100%, 0, 0);
// }

// .slide-in-leave-active {
//   opacity: 0;
//   transform: translate3d(-100%, 0, 0);
// }
</style>