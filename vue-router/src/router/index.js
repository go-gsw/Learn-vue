import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Hello from '@/components/Hello'
import Address from '@/components/address'
import news from '@/components/news'
import message from '@/components/message'
// import user from '@/components/'
Vue.use(Router)
Vue.use(Vuex)
// const news={ template:'<div><ul><li>news1</li><li>news2</li><li>news3</li></ul></div>' }
// const message={ template:'<div>jjjjjjjjjjj</div>' }
      // <h2>User:{{ $route.params.user.name }}</h2>
      //父组件
const Users={
      template:'\
      <div class="user">\
      <h1>UsersTemplate</h1>\
      <div>{{$route.params.name}}</div>\
      <transition name="fade"><router-view class="part2"></router-view></transition>\
      </div>'}
      //子组件
const user={template:'<div>{{$route.params.username}}</div>'}

// const Counter={template:'<div><p>{{count}}</p><div>\
//       <button @click="increment">+</button>\
//       <button @click="decrement">-</button>\
//       </div></div>',computed:{count(){return this.$stroe.state.count}}}

// const store =new Vuex.Store({
//   state:{
//     count:0
//   },
//   mutations:{
//     // increment(state){
//     //   state.count++
//     // }
//     increment:state=>state.count++,
//     decrement:state=>state.count--
//   }
// })

export default new Router({
  routes: [
    /*{
      path:'/user',
      component:user,
      children:[*/

      //默认显示地址由path:'/'表示
      {
        //动态路由匹配
        path:'/users/:username/uname/:name',
        //命名视图
        // components:{default:Users,Aname:Counter},
        component:Users,
        children:[

          {path:'',name:'',component:user},
        ]
      },
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
      ]

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
