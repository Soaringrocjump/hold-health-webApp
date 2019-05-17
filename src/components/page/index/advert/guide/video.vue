<!-- 操作视频 -->
<template>
  <div class="guide">
    <ul class="video-list">
      <a href="http://video.guanqi2019.com/video/t.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>通用检测流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/z1.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>智能面访客户信息录入方法.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/z2.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>智能面访检测流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/y.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>邀约贴分享+信息确认录入.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/b.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>报告分享视频-1.mp4</li>
      </a>
    </ul>
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
.guide{
  padding-top: 50px;
  text-align: center;
  .video-list{
    width: 520px;
    margin: 50px auto;
    li{
      display: flex;
      align-items: center;
      font-size: 32px;
      color: rgba(14,16,128,1);
      background: linear-gradient(0deg,#a94fff,#e635ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 75px;
      i{
        font-size: 36px;
        margin-right: 15px;
      }
    }
  }
}
</style>