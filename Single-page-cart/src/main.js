// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon',Icon)
Vue.prototype.$http=axios
Vue.config.productionTip = false
Vue.use(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
//全局过滤器，接受参数
Vue.filter("money",function(value,type){
  return value.toFixed(2)+" " + type;
})
