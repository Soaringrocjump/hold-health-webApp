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
            <dt>工号：{{basicInfo.staffCode}}</dt>
            <dd>太平洋人寿保险宁波分公司</dd>
          </dl>
        </div>
        <!-- <div class="qr-code">
          <img src="~IMG/qqr-code.png" alt="">
        </div> -->
        <i class="iconfont icon-erweima"></i>
      </div>
      <div class="personal-card-down">
        <div>
          <span>剩余检测次数</span>
          <span>{{basicInfo.deviceNums}}</span>
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
    <div class="personal-panel">
      <h2>我的钱包</h2>
      <div class="part-panel">
        <div class="part-left">
          <dl>
            <dt>剩余检测次数</dt>
            <dd>365</dd>
          </dl>
          <div class="panel-btn">继续充值</div>
        </div>
        <div class="ver-line"></div>
        <div class="part-right">
          <dl>
            <dt>到期时间（过期清零）</dt>
            <dd>2019.10.01</dd>
          </dl>
          <div class="panel-btn">如何延长有效期</div>
        </div>
      </div>
    </div>
    <div class="personal-panel">
      <h2>我的设备</h2>
      <div class="part-panel">
        <div class="part-left">
          <dl>
            <dt>设备识别号</dt>
            <dd>HH19B0001</dd>
          </dl>
          <div class="panel-btn">继续充值</div>
        </div>
        <div class="ver-line"></div>
        <div class="part-right">
          <dl>
            <dt>设备归属权</dt>
            <dd>拥有所有权</dd>
          </dl>
          <div class="panel-btn">申请解绑设备</div>
        </div>
      </div>
    </div>
    <div class="personal-panel">
      <h2>发布邀约记录</h2>
      <ul class="record">
        <li>2019.05.01,13:11 通过微信发送给朋友。</li>
        <li>2019.05.01,13:11 通过微信分享到朋友圈。</li>
        <li>2019.05.01,13:11 分享到QQ。</li>
        <li>2019.05.01,13:11 分享到新浪微博。</li>
      </ul>
      <div class="record-bottom">
          <div class="panel-btn">申请解绑设备</div>
          <span class="more">查看更多>></span>
      </div>
    </div>
    <div class="personal-panel">
      <h2>我的工具</h2>
      <div class="personal-tool-list clearfix">
        <dl class="border-r border-b ">
          <dt>
            <img src="~IMG/index-tool1.png" alt="">
          </dt>
          <dd>账户管理</dd>
        </dl>
        <dl class="border-r border-b">
          <dt>
            <img src="~IMG/index-tool2.png" alt="">
          </dt>
          <dd>推广海报</dd>
        </dl>
        <dl class="border-b">
          <dt>
            <img src="~IMG/index-tool3.png" alt="">
          </dt>
          <dd>进度查询</dd>
        </dl>
        <dl class="border-r padding-t">
          <dt>
            <img src="~IMG/index-tool4.png" alt="">
          </dt>
          <dd>流程说明</dd>
        </dl>
        <dl class="border-r padding-t">
          <dt>
            <img src="~IMG/index-tool5.png" alt="">
          </dt>
          <dd>升级会员</dd>
        </dl>
        <dl class="padding-t">
          <dt>
            <img src="~IMG/index-tool6.png" alt="">
          </dt>
          <dd>帮助中心</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
  },
  computed: {
    ...mapState(['basicInfo'])
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/personal.scss";
</style>