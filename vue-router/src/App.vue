<template>
  <div id="app">
    <img src="./assets/logo.png">
      <div id="list-group">
      <!-- <h2>{{$router.params.id}}</h2> -->
        <!-- <a v-link="{path:'/Hello'}">第一</a>
        <a v-link="{path:'/Address'}">第二</a> -->
        <!-- v-link指令已经被一个新的<router-link> 组件指令替代 -->
        <router-link to="/Hello" active-class="A-link-active" >VUE</router-link>
        <router-link to="/Address" active-class="A-link-active" >地址列表</router-link>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
//export也是ES6写法等价于module.export{default}
import Storage from './Storage'
import AddloadEvent from './addloadEvent'
console.log(Storage)

export default {
  name: 'app',
/* data(){
    return {
      istrue:false
    }
  }*/
/* methods:{
  }*/
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
  /*box-sizing: border-box;*/
  /*color: #fff;*/
  font-weight: bold;
  width: 120px;
  height: 50px;
  line-height: 50px;
  /*background-color: red;*/
  text-decoration: none;
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
