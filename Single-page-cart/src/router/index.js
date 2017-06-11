import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import address from '@/components/address'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Hello'
    },
    {
      path: '/Hello',
      // name: 'Hello',
      component: Hello
    },
    {
  	  path:'/address',
  	  component:address	
    }
  ]
})
