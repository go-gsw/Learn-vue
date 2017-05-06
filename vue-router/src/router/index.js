import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Address from '@/components/address'
import news from '@/components/news'
import message from '@/components/message'
// import user from '@/components/'
Vue.use(Router)

// const news={ template:'<div><ul><li>news1</li><li>news2</li><li>news3</li></ul></div>' }
// const message={ template:'<div>jjjjjjjjjjj</div>' }
/*const user={template:'\
      <div class="user">\
      <h2>User:{{ $route.params.id }}</h2>\
      <router-link to="/user/Hello">登陆</router-link>\
      <router-link to="/user/Address">注册</router-link>\
      <router-view></router-view>\
      </div>'}*/
export default new Router({
  routes: [
    /*{
      path:'/user',
      component:user,
      children:[*/

      //默认显示地址由path:'/'表示
      {
        path: '/Hello',
        component: Hello,
        children:[
        	{
        		path:'/Hello/news',component: news
        	},
        	{
        		path:'/Hello/message',component: message
        	}
        ],
      },
      {
  	  path: '/Address',
  	  component: Address,
      children:[
          {
            path:'/Address/news',component: news
          },
          {
            path:'/Address/message',component: message
          }
        ],

      }
      ],

    // linkActiveClass是全局配置
    // linkActiveClass:'A-link-active'
})

// router.map方法已经被替换
/*var router = new Router()
router.map({
	'/Address':{component:Address},
	'/Hello':{component:Hello}
})*/

// router.start方法已经被替换
/*var App=Vue.extend({})
router.start(App,'#app')*/
