import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '/me',
      name: 'UserInfo',
      component: () => import('@/views/UserInfo')
    }
  ]
})
