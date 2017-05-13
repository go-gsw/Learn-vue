<template>
  <div id="app">
    <div class="imglogo">
      <img src="./assets/logo.png">
    </div>
      <div id="list-group">
      <!-- <h2>{{$router.params.id}}</h2> -->
        <!-- <a v-link="{path:'/Hello'}">第一</a>
        <a v-link="{path:'/Address'}">第二</a> -->
        <!-- 表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。 -->

        <!-- v-link指令已经被一个新的<router-link> 组件指令替代 -->
        <router-link to="/Hello" active-class="A-link-active" >Hello</router-link>
        <router-link to="/Address" active-class="A-link-active" >地址列表</router-link>
        <ul>
          <!-- 是一个字符串路径，或者一个描述地址的对象 -->
          <!-- 动态路由匹配 -->
          <li><router-link to="/users/gsw/uname/ccc">小小gsw</router-link></li>
          <li><router-link :to="{path:'/users/GSWGGGGGG/uname/www',query:{gsw:'barrr'}}">大gsw</router-link></li>
          <li><router-link :to="{path:'/users/GSW/uname/ddd',params:{username:'GSW',name:'ddd'},query:{gsw:'barvvv'}}">大大gsw</router-link></li>
        </ul>
      </div>
      <!-- 添加mode属性改变过度模式 in-out: 新元素先进行过渡，完成之后当前元素过渡离开。
                                    out-in: 当前元素先进行过渡，完成之后新元素过渡进入。
            默认行为-进入和离开同时发生
       -->
    <transition name="fade" mode="out-in" appear><router-view class="part1"></router-view></transition>
    <!-- <router-view class="part2" name="Aname"></router-view> -->
    <div class="testprops">
      <div class="testh2">
      <h2>子组件传递过来的值:{{ChildWords}}</h2>
      </div>
      <!-- 父组件向子组件传递 msgfromfatherComponent，子组件向父组件传递需要绑定监听事件(children-tell-father)-->
      <testprops msgfromfatherComponent="父向子组件传递过来的值" v-on:children-tell-father='ListenMyChild' ></testprops>
    </div>
  </div>
</template>

<script>
import Storage from './Storage'
import AddloadEvent from './addloadEvent'
import testprops from './components/testprops'
// console.log(Storage)

//export也是ES6写法等价于module.export{default}
export default {
  name: 'app',
  //加载组件进来
  components:{ testprops },
  data(){
      return {
        ChildWords:''
      }
  },
  methods:{
    ListenMyChild(msg){
      this.ChildWords=msg;
    }
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
img{
  width: 80px;
  height: 80px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  width: 1300px;
  margin:0 auto;
  margin-top: 60px;
  border: 2px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
}
#app .imglogo{
  width: 1200px;
  height: 100px;
  margin:auto;
}
#app .imglogo img{
  float: left;
}
#app .imglogo img:after{
  content: '';
  display: block;
  clear: both;
}
/*#app .part2{
  background-color: red;
}*/
#app #list-group{
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  border-radius: 5px;
  background-color: #ddd;
}
#app #list-group a{
  display: inline-block;
  box-sizing: border-box;
  /*color: #fff;*/
  font-weight: bold;
  width: 120px;
  height: 50px;
  line-height: 50px;
  /*background-color: red;*/
  text-decoration: none;
}
#app #list-group ul{
  padding: 0;
  margin:0;
}
#app #list-group ul li{
  display: inline-block;
  list-style: none;
  padding: 0;
  margin:0 auto;
}
/*#app #list-group .user{
  width: 1200px;
  margin: auto;
  background-color: #eee;
}*/
.user{
  width: 1200px;
  height: 300px;
  margin:10px auto;
  background-color: #ccc;
  border-radius: 2px;
}
.hello{
  width: 1200px;
  margin: auto;
  background-color: #ddd;
  border-radius: 2px;
}
.address{
  width: 1200px;
  margin: auto;
  background-color: #eee;
  border-radius: 2px;
}
/*.part1{
  background-color: #ccc;
}*/
/*#app #list-group .part1{
  width: 1200px;
  margin: auto;
  background-color: #eee;
}*/
#app .testprops{
  width: 1200px;
  margin: auto;
  background-color: #ccc;
}
#app .testprops .testh2{
  height: 50px;
  line-height: 50px;
}

/* #app .list-group a:link{
  color: black;
} */
/*#app #list-group a:visited{
  color: #ccc;
}*/
/*#app #list-group a:hover{
  color: #ccc;
}*/
/* #app .list-group a:active{
  color: yellow;
}*/
a.A-link-active {
  color: red;
}

/*li.router-link-active a{
  color: #900;
}*/

.user>.fade-enter-active,.user>.fade-leave-active {
  transition: opacity 5s
}
.user>.fade-enter,.user>.fade-leave-active /* .fade-leave-active in <2.1.8 */ {
  transform: translateX(10px);
  color: red;
  opacity: 0
}

.fade-enter-active, .fade-leave-active {
  transition: .4s ease-out;
}
.fade-enter-to,.fade-leave{
  /*opacity: 1;*/
  /*visibility: visible;*/

}
.fade-enter{
  opacity: 0;
  visibility: hidden;
  transform: translateX(1000px);
}
.fade-leave-to{
  opacity: 0;
  visibility: hidden;
  transform: translateX(-1000px);
}
</style>
