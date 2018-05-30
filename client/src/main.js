// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'static/css/index.scss'
import App from './App';
import store from './store'
import router from './router'

// 注入Vue Instance
Vue.use(VueCookie)
Vue.use(VeeValidate)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)


// 在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
Vue.config.productionTip = false

// 定义全局方法
// Vue.prototype.$get = get // 通过this.$get调用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
