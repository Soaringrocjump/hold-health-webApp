import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
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
        //客户模块
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
    //我的客户
    {
      path: '/myClient',
      name: 'myClient',
      component: () => import ("@/components/page/index/myClient"),
      meta: {title: 'myClient'},
    },
    //客户中心
    {
      path: '/clientInfo',
      name: 'clientInfo',
      component: () => import ("@/components/page/index/clientInfo"),
      meta: {title: 'clientInfo'},
    },
    //修改客户信息
    {
      path: '/infoModify',
      name: 'infoModify',
      component: () => import ("@/components/page/index/clientInfo/infoModify"),
      meta: {title: 'clientInfo'},
    },
    //成功检测
    {
      path: '/successTest',
      name: 'successTest',
      component: () => import ("@/components/page/index/holdHealthTest/successTest"),
      meta: {title: 'successTest'},
    },
    //等待检测
    {
      path: '/waitTest',
      name: 'waitTest',
      component: () => import ("@/components/page/index/holdHealthTest/waitTest"),
      meta: {title: 'waitTest'},
    },
    //充值记录
    {
      path: '/recharge',
      name: 'recharge',
      component: () => import ("@/components/page/index/recharge"),
      meta: {title: 'recharge'},
    },
    //健康在手
    {
      path: '/holdHealth',
      name: 'holdHealth',
      component: () => import ("@/components/page/index/advert/holdHealth"),
      meta: {title: 'holdHealth'},
    },
    //操作指南
    {
      path: '/operateGuide',
      name: 'operateGuide',
      component: () => import ("@/components/page/index/advert/operateGuide"),
      meta: {title: 'operateGuide'},
    },
    //尊贵服务-基础
    {
      path: '/serviceStage1',
      name: 'serviceStage1',
      component: () => import ("@/components/page/index/honorableService/stage1"),
      meta: {title: 'serviceStage1'},
    },
    //尊贵服务-进阶
    {
      path: '/serviceStage2',
      name: 'serviceStage2',
      component: () => import ("@/components/page/index/honorableService/stage2"),
      meta: {title: 'serviceStage2'},
    },
    //尊贵服务-提升
    {
      path: '/serviceStage3',
      name: 'serviceStage3',
      component: () => import ("@/components/page/index/honorableService/stage3"),
      meta: {title: 'serviceStage3'},
    },
    //尊贵服务-特色
    {
      path: '/serviceStage4',
      name: 'serviceStage4',
      component: () => import ("@/components/page/index/honorableService/stage4"),
      meta: {title: 'serviceStage4'},
    },
    //设置
    {
      path: '/option',
      name: 'option',
      component: () => import ("@/components/page/personal/option"),
      meta: {title: 'option'},
    },
    //关于我们
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import ("@/components/page/personal/aboutUs"),
      meta: {title: 'aboutUs'},
    },
    //用户协议
    {
      path: '/userAgreement',
      name: 'userAgreement',
      component: () => import ("@/components/page/personal/userAgreement"),
      meta: {title: 'userAgreement'},
    },
  ]
})

/* 权限判断 */
router.beforeEach((to, from, next) => {
  let isLogin = localStorage.getItem("authorization")
  if (!isLogin) {
    if (to.path === '/') {
      next();
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
