// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


//import是ES6写法等价于var App =require('./App')
import Vue from 'vue'
import App from './App'
import router from './router'
import AddloadEvent from './addloadEvent'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(AddloadEvent)
Vue.config.productionTip = false

/* eslint-disable no-new */
const store =new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    // increment(state){
    //   state.count++
    // }
    increment:state=>state.count++,
    decrement:state=>state.count--
  }
})

new Vue({
  el: '#app',
  store,
  router:router,
  template: '<App/>',
  components: { App }
})

