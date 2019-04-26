<!-- 个人中心模块 -->
<template>
  <div class="personal-page">
    <TopBg>
      <PersonTop title="个人中心"  hasMore/>
    </TopBg>
    <div class="personal-card">
      <div class="personal-card-up">
        <div class="head-info">
          <div class="head">
            <img src="~IMG/YY.jpg" alt="">
          </div>
          <dl>
            <dt>工号：YYYY0001</dt>
            <dd>太平洋人寿保险宁波分公司</dd>
          </dl>
        </div>
        <div class="qr-code">
          <img src="~IMG/qqr-code.png" alt="">
        </div>
      </div>
      <div class="personal-card-down">
        <div>
          <span>剩余检测次数</span>
          <span>365</span>
        </div>
        <div>
          <span>当前剩余积分</span>
          <span>1888</span>
        </div>
      </div>
    </div>
    <div class="personal-new-msg">
      <div class="check">
        <span class="msg-icon"><img src="~IMG/personal-msg.png" alt=""></span>
        <span>您有新的留言消息</span>
      </div>
      <div class="close">
        <img src="~IMG/personal-close.png" alt="">
      </div>
    </div>
    <ul class="personal-menu-list">
      <li v-for="(item,index) in personalMenu" :key="index">
        <div class="menu-info">
          <span class="menu-icon">
            <img :src="item.iconName" alt="">
          </span>
          <span class="menu-name">{{item.menuName}}</span>
        </div>
        <div class="jump">
          <img src="~IMG/personal-jump.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import PersonTop from 'Module/PersonTop'
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      personalMenu:[
        {
          menuName: '个人信息',
          iconName: require('@/assets/img/personal-icon1.png')
        },
        {
          menuName: '我的团队',
          iconName: require('@/assets/img/personal-icon2.png')
        },
        {
          menuName: '发布邀约记录',
          iconName: require('@/assets/img/personal-icon3.png')
        },
        {
          menuName: '我的设备',
          iconName: require('@/assets/img/personal-icon4.png')
        },
        {
          menuName: '采购记录',
          iconName: require('@/assets/img/personal-icon5.png')
        },
        {
          menuName: '操作指南',
          iconName: require('@/assets/img/personal-icon6.png')
        }
      ]
    };
  },
  components:{
    PersonTop,
    TopBg
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/personal.scss";
</style>