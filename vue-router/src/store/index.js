import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counts: 9
  },
  mutations: {
    // increment: function (state) {
    //   state.counts++;
    // },
    // decrement: function (state) {
    //   state.counts--;
    // }
    inc:state=>state.counts++,
    dec:state=>state.counts--
  },
  // 触发mutation中的方法
  // actions: {
  //   inc (context) {
  //     context.commit('inc')
  //   },
  //   dec (context) {
  //     context.commit('dec')
  //   }
  // }
})