<!-- 操作指南 -->
<template>
  <div class="operateGuide">
    <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
    <img src="~IMG/guide-top.png" alt="">
    <div class="tab">
      <div v-for="(item,index) in tab" :key="index" :class="[item.active ? 'active' : '', 'tabBtn']" @click="handle(item)">
        <i :class="item.iconfont"></i>{{item.name}}
      </div>
    </div>
    <components :is="actModule"/>
  </div>
</template>

<script>
import Test from './guide/test'
import Invite from './guide/invite'
import Video from './guide/video'
export default {
  data () {
    return {
      tab:[
        {
          name: '如何检测',
          iconfont: 'iconfont icon-problem',
          active: true,
          module: 'Test',
          disable: false
        },
        {
          name: '如何邀约',
          iconfont: 'iconfont icon-gerenzhongxin1',
          active: false,
          module: 'Invite',
          disable: false
        },
        {
          name: '操作视频',
          iconfont: 'iconfont icon-748bianjiqi_shipin',
          active: false,
          module: 'Video',
          disable: true
        }
      ],
      actModule: Test
    };
  },
  components:{
    Test,
    Invite,
    Video
  },
  methods:{
    handle(val){
      this.tab.forEach(el => {
        el.active = false
      })
      val.active = true
      this.actModule = val.module
    }
  }
}

</script>
<style lang='scss' scoped>
.operateGuide{
  position: relative;
  width: 750px;
  >.iconfont{
    position: absolute;
    top: 25px;
    left: 35px;
    font-size: 40px;
    color: #fff;
  }
  .tab{
    display: flex;
    justify-content: space-between;
    .tabBtn{
      width: 248px;
      height: 97px;
      padding: 0 42px;
      background: #EAEAEA;
      color: #777777;
      font-size: 30px;
      display: flex;
      align-items: center;
      i{
        height: 36px;
        font-size: 36px;
        margin-right: 8px;
      }
    }
    .active{
      position: relative;
      color: #fff;
      background:linear-gradient(0deg,rgba(169,79,255,1),rgba(230,53,255,1));
      &::before{
        position: absolute;
        left: 50%;
        bottom: -15px;
        content: "";
        width: 0;
        height: 0;
        z-index: 1;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 15px solid #a94fff;
      }
    }
  }
}
</style>