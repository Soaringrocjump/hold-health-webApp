import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/components/page/login')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import(/* webpackChunkName: "menu" */ '@/components/page/layout/bottom-menu'),
      redirect: '/menu/index',
      children: [
        //首页模块
        {
          path: 'index',
          name: 'index',
          component: () => import ("@/components/page/index/index"),
          meta: {title: 'index'},
        },
        //订单模块
        {
          path: 'orders',
          name: 'orders',
          component: () => import ("@/components/page/orders/index"),
          meta: {title: 'index'},
        },
        //邀约模块
        {
          path: 'invitation',
          name: 'invitation',
          component: () => import ("@/components/page/invitation/index"),
          meta: {title: 'index'},
        },
        //采购模块
        {
          path: 'purchase',
          name: 'purchase',
          component: () => import ("@/components/page/purchase/index"),
          meta: {title: 'index'},
        },
        //个人中心模块
        {
          path: 'personal',
          name: 'personal',
          component: () => import ("@/components/page/personal/index"),
          meta: {title: 'index'},
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
    //模块
    {
      path: '/clientInfo',
      name: 'clientInfo',
      component: () => import ("@/components/page/index/clientInfo"),
      meta: {title: 'clientInfo'},
    },
  ]
})