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
    <!-- <router-link to="scanCode"> -->
      <div class="confirmBtn" @click="getSelService">已确认，下一步</div>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      serviceList:[
        {
          serviceName: '健康在手',
          serviceImg: require('@/assets/img/invitation-service1.png'),
          check: false,
          disabled: false
        },
        {
          serviceName: '荃禾"7+3"',
          serviceImg: require('@/assets/img/invitation-service2.png'),
          check: false,
          disabled: false
        },
        {
          serviceName: '遗传基因检测',
          serviceImg: require('@/assets/img/invitation-service3.png'),
          check: false,
          disabled: true
        },
        {
          serviceName: '健康智库',
          serviceImg: require('@/assets/img/invitation-service4.png'),
          check: false,
          disabled: true
        },
      ]
    };
  },
  methods:{
    chose(val){
      if(!val.disabled){
        val.check = !val.check
      }
      // this.serviceList.forEach(el=>{
      //   el.check = false
      // })
      // val.check = true;
    },
    getSelService(){
      let service = []
      this.serviceList.forEach(el => {
        if(!el.disabled && el.check){
          console.log(el.serviceName);
          service.push(el.serviceName)
        }
      });
      console.log(service);
      if(service.length > 0){
        this.$router.push({
          path: 'scanCode',
          query:{
            service: service
          }
        })
      }else{
        this.$toast('请选择邀约项目');
      }
      
    }
  }
}

</script>
<style lang='scss'>
.van-toast{
  font-size: 32px;
  line-height: unset
}
.van-toast--text{
  padding: 6px 20px;
}
</style>