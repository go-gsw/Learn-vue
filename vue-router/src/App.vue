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
        <router-link to="/Hello" active-class="A-link-active" >VUE</router-link>
        <router-link to="/Address" active-class="A-link-active" >地址列表</router-link>
        <ul>
          <!-- 是一个字符串路径，或者一个描述地址的对象 -->
          <!-- 动态路由匹配 -->
          <li><router-link to="/users/gsw/uname/ccc">小小gsw</router-link></li>
          <li><router-link :to="{path:'/users/GSWGGGGGG/uname/www',query:{foo:'barrrr'}}">大gsw</router-link></li>
          <li><router-link :to="{params:{username:'GSW',name:'ddd'},query:{foo:'barvvvvv'}}">大大gsw</router-link></li>
        </ul>
      </div>
    <router-view class="part1"></router-view>
    <!-- <router-view class="part2" name="Aname"></router-view> -->
    <div class="testprops">
      <h2>子组件传递过来的值:{{ChildWords}}</h2>
      <!-- 父组件向子组件传递 msgfromfatherComponent，子组件向父组件传递需要绑定事件(children-tell-father)-->
      <testprops msgfromfatherComponent="父向子传递的值" v-on:children-tell-father='ListenMyChild' ></testprops>
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
  margin-top: 60px;
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
  margin: auto;
  background-color: #eee;
  border-radius: 2px;
}
.part1{
  background-color: #ccc;
}
/*#app #list-group .part1{
  width: 1200px;
  margin: auto;
  background-color: #eee;
}*/
#app .testprops{
  width: 1200px;
  margin: auto;
  background-color: #eee;
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
</style>
