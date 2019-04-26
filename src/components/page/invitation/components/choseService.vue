<!-- 选择服务 -->
<template>
  <div class="choseService">
    <div class="service-list">
      <dl>
        <dt>请选择您要提供的服务</dt>
        <dd  v-for="(item,index) in serviceList" :key="index">
          <div class="invitation-service">
            <img :src="item.serviceImg" alt="">
          </div>
          <div :class="[item.check ? 'checkedBox' : 'checkBox']" @click="chose(item)">
            <img v-if="item.check" src="~IMG/invitation-checked.png" alt="">
          </div>
        </dd>
      </dl>
    </div>
    <router-link to="scanCode">
      <div class="confirmBtn">已确认，下一步</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serviceList:[
        {
          serviceName: '体姿态测评',
          serviceImg: require('@/assets/img/invitation-service1.png'),
          check: true
        },
        {
          serviceName: '荃禾"7+3"',
          serviceImg: require('@/assets/img/invitation-service2.png'),
          check: false
        },
        {
          serviceName: '遗传基因检测',
          serviceImg: require('@/assets/img/invitation-service3.png'),
          check: false
        },
        {
          serviceName: '健康智库',
          serviceImg: require('@/assets/img/invitation-service4.png'),
          check: false
        },
      ]
    };
  },
  methods:{
    chose(val){
      this.serviceList.forEach(el=>{
        el.check = false
      })
      val.check = true;
    }
  }
}

</script>
<style lang='' scoped>
</style>