<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="router-list">
      <router-link to="/">Hello</router-link>
      <router-link to="/address">address</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello' 
export default {
  name: 'app',
  // components:{Hello},
}
window.onload=function(){
  var list=document.getElementsByTagName('a');
  for(var i=0;i<list.length;i++){
    list[i].onclick=function changelist(){
      for(var j=0;j<list.length;j++){
        if(list[j]==this){
          this.style.color="#333";
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
  margin-top: 10px;
}
#app img{
  width: 40px;
  height: 40px;
}
#app .router-list{
  border-radius: 2px;
  width: 200px;
  height: 30px;
  margin: 0 auto;
  background-color: gray;
}
#app .router-list a{
  margin-right: 10px;
  letter-spacing: 1px;
  line-height: 30px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
#app .router-list a:hover{
  color: #333;
}
/*#app .router-list a:after{
  color: yellow;
}
#app .router-list a:active{
  color: red;
}*/
</style>
