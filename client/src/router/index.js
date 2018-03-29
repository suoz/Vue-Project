import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login'
import Index from '../views/index'
import Info from '../views/info'
import Page from '../views/page'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: 'login',
        name: 'Login',
        component: Login
      }, {
        path: 'info',
        name: 'Info',
        component: Info,
        meta: {
          requireAuth: true
        },
      }, {
        path: 'page',
        name: 'Page',
        component: Page
      }]
    },
  ],
})

router.beforeEach((to, from, next) => {
  // next 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  if (to.meta.requireAuth) {
    if (this.$cookie.get('token')) {
      const token = this.$cookie.get('token').split(' ')[1]
      console.log('token', token)
      this.$store.dispatch('updateUser', token)
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})

export default router
