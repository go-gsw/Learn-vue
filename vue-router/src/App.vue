<template>
  <div id="app">
    <img src="./assets/logo.png">
      <div id="list-group">
      <!-- <h2>{{$router.params.id}}</h2> -->
        <!-- <a v-link="{path:'/Hello'}">第一</a>
        <a v-link="{path:'/Address'}">第二</a> -->
        <!-- 表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。 -->

        <!-- v-link指令已经被一个新的<router-link> 组件指令替代 -->
        <router-link to="/Hello" active-class="A-link-active" >VUE</router-link>
        <router-link to="/Address" active-class="A-link-active" >地址列表</router-link>
      </div>
        <ul>
          <!-- 是一个字符串路径，或者一个描述地址的对象 -->
          <li><router-link to="/users/gsw">小gsw</router-link></li>
          <li><router-link :to="{path:'/users/GSWGGGGGG',params:{name:'ddd'},query:{foo:'barrrr'}}">大gsw</router-link></li>
          <li><router-link :to="{params: { username:'GSW' },query:{foo:'barvvvvv'}}">大大gsw</router-link></li>
        </ul>
    <router-view></router-view>
    <h2>child Component tell me :{{ChildWords}}</h2>
    <!-- 父组件向子组件传递 msgfromfatherComponent，子组件向父组件传递需要绑定事件-->
    <testprops msgfromfatherComponent="hahahahah!" v-on:children-tell-father='ListenMyChild' ></testprops>
  </div>
</template>

<script>
import Storage from './Storage'
import AddloadEvent from './addloadEvent'
import testprops from './components/message'
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 60px;
}
#app #list-group{
  width: 1200px;
  margin: 0 auto;
  height: 50px;
  border-radius: 10px;
  background-color: gray;
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
ul{
  padding: 0;
}
ul li{
  list-style: none;
  padding: 0;
  margin:0 auto;
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
