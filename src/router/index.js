import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/page/login')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/components/page/layout/bottom-menu'),
      redirect: '/menu/index',
      children: [
        //首页模块
        {
          path: 'index',
          name: 'index',
          component: () => import ("@/components/page/index/index")
        },
        //订单模块
        {
          path: 'orders',
          name: 'orders',
          component: () => import ("@/components/page/orders/index")
        },
        //采购模块
        {
          path: 'purchase',
          name: 'purchase',
          component: () => import ("@/components/page/purchase/index")
        },
        //个人中心模块
        {
          path: 'personal',
          name: 'personal',
          component: () => import ("@/components/page/personal/index")
        },
      ]
    },
    //邀约模块
    {
      path: '/invitation',
      name: 'invitation',
      component: () => import ("@/components/page/invitation/index"),
      redirect: '/invitation/choseService',
      children: [
        //选择服务
        {
          path: 'choseService',
          name: 'choseService',
          component: () => import ("@/components/page/invitation/components/choseService")
        },
        //面对面扫码
        {
          path: 'scanCode',
          name: 'scanCode',
          component: () => import ("@/components/page/invitation/components/scanCode")
        },
        //确认发布
        {
          path: 'confirmShare',
          name: 'confirmShare',
          component: () => import ("@/components/page/invitation/components/confirmShare")
        }
      ]
    },
    //健康预约
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import ("@/components/page/invitation/appointment"),
      redirect: '/appointment/getAppointment',
      children: [
        //客户收到邀约
        {
          path: 'getAppointment',
          name: 'getAppointment',
          component: () => import ("@/components/page/invitation/components/getAppointment")
        },
        //填写预约信息
        {
          path: 'fillAppointment',
          name: 'fillAppointment',
          component: () => import ("@/components/page/invitation/components/fillAppointment")
        },
      ]
    },
    //我的客户模块
    {
      path: '/myClient',
      name: 'myClient',
      component: () => import ("@/components/page/index/myClient"),
      meta: {title: 'myClient'},
    },
    //客户中心模块
    {
      path: '/clientInfo',
      name: 'clientInfo',
      component: () => import ("@/components/page/index/clientInfo"),
      meta: {title: 'clientInfo'},
    },
    //成功检测模块
    {
      path: '/successTest',
      name: 'successTest',
      component: () => import ("@/components/page/index/holdHealthTest/successTest"),
      meta: {title: 'successTest'},
    },
    //等待检测模块
    {
      path: '/waitTest',
      name: 'waitTest',
      component: () => import ("@/components/page/index/holdHealthTest/waitTest"),
      meta: {title: 'waitTest'},
    },
    //充值记录模块
    {
      path: '/recharge',
      name: 'recharge',
      component: () => import ("@/components/page/index/recharge"),
      meta: {title: 'recharge'},
    },
    
  ]
})