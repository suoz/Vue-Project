import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/login'
import Index from 'views/index'
import Info from 'views/info'
import Information from 'views/information'
import store from '../store/index'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: 'info',
        name: 'info',
        component: Info,
        meta: {
          requireAuth: true
        },
      }, {
        path: 'information',
        name: 'information',
        component: Information
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  // next 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  if (to.meta.requireAuth) {
    if (store.state.user.token) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } }) // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
    }
  } else {
    next()
  }
})

export default router
