import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import City from '@/components/City'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 初始化页面路由跳转时的 位置
  scrollBehavior (to, from, savedPosition) {
      return {x:0,y:0}
  }
})
