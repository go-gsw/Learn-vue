<template>
  <div id="app">
    <img src="./assets/logo.png">
      <div id="list-group">
      <!-- <h2>{{$router.params.id}}</h2> -->
        <!-- <a v-link="{path:'/Hello'}">第一</a>
        <a v-link="{path:'/Address'}">第二</a> -->
        <!-- v-link指令已经被一个新的<router-link> 组件指令替代 -->
        <router-link to="/">VUE</router-link>
        <router-link to="/Address">地址列表</router-link>
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
/*  data(){
    return {
      istrue:false
    }
  }*/
/*  methods:{
    AddloadEvent(ApploadChange)
  }*/
}
addloadEvent(ApploadChange)
addloadEvent(HelloloadChange)
function addloadEvent(func){
  var oldonload=window.onload;
  if(typeof window.onload !="function"){
    window.onload=func;
  }else{
    window.onload=function(){
      oldonload();
      func();
    }
  }
  console.log(oldonload);
}


// window.onload=function(){
function ApploadChange(){
  var routerlist=document.getElementById('list-group')
  var list=routerlist.getElementsByTagName('a');
  for(var i=0;i<list.length;i++){
    list[i].onclick= function changelist(){
      for(var j=0;j<list.length;j++){
        if(list[j]==this){
          this.style.color="#ccc";
        }else{
          list[j].style.color="#fff";
        }
      }
    };
  }
}
function HelloloadChange(){
// window.onload=function(){
  var routerlist=document.getElementById('router-link')
  var list=routerlist.getElementsByTagName('a');
  for(var i=0;i<list.length;i++){
    list[i].onclick= function changelist(){
      for(var j=0;j<list.length;j++){
        if(list[j]==this){
          this.style.color="#000";
        }else{
          list[j].style.color="#fff";
        }
      }
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  color: #fff;
  font-weight: bold;
  width: 120px;
  height: 50px;
  line-height: 50px;
  /*background-color: red;*/
  text-decoration: none;
}
/* #app .list-group a:link{
  color: red;
} 
#app .list-group a:visited{
  color: green;
}*/
 #app #list-group a:hover{
  color: #ccc;
}
/* #app .list-group a:active{
  color: yellow;
}*/
</style>
