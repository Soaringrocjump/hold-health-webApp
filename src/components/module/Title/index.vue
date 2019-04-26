<!-- 卡片title -->
<template>
  <div :class="['title', hasLine ? 'hasLine': '']">
    <div class="name">
      <span class="sign"></span>
      <span>{{title}}</span>
    </div>
    <span v-if="hasMore" class="more">更多></span>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: '标题'
    },
    hasMore:{
      type: Boolean,
      default: false
    },
    hasLine:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    };
  },
}

</script>
<style lang='scss' scoped>
.title{
  height: 72px;
  padding: 0 33px;
  font-size: 30px;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name{
    display: flex;
    align-items: center;
    .sign{
      display: inline-block;
      width:6px;
      height:35px;
      background:linear-gradient(0deg,rgba(51,176,255,1),rgba(51,123,255,1),rgba(18,40,246,1));
      margin-right: 6px;
    }
  }
  .more{
    font-size: 26px;
    color: #000;
  }
}
.hasLine{
  border-bottom: 2px solid rgba(244,245,250,1);
}
</style>