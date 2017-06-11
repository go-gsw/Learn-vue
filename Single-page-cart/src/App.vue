<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="router-list">
      <router-link to="/" active-class="changingactive">Hello</router-link>
      <router-link to="/address" active-class="changingactive">address</router-link>
    </div>
    <transition name="moveact" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Hello from './components/Hello' 
export default {
  name: 'app',
  // components:{Hello},
}
window.onload=function(){
  var routerlist=document.getElementById('router-list')
  var list=routerlist.getElementsByTagName('a');
  for(var i=0;i<list.length;i++){
    list[i].onclick=function changelist(){
      for(var j=0;j<list.length;j++){
        if(list[j]==this){
          this.style.color="#333";
        }else{
          list[j].style.color="#eee";
        }
      }
    };
  }
}

</script>

<style scoped>
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
#app #router-list{
  border-radius: 2px;
  width: 200px;
  height: 30px;
  margin: 0 auto;
  background-color: gray;
}
#app #router-list a{
  margin-right: 10px;
  letter-spacing: 1px;
  line-height: 30px;
  text-decoration: none;
  color: #eee;
  font-weight: bold;
}
#app #router-list a:hover{
  color: #333;
}
/*#app .router-list a:after{
  color: yellow;
}
#app .router-list a:active{
  color: red;
}*/
 #app #router-list a.changingactive{
  color:#333;
}
.moveact-enter-active, .moveact-leave-active{
  transition: .3s ease;
}
.moveact-enter-to, .moveact-leave{
  opacity: 1;
}
.moveact-enter,.moveact-leave-to{
  opacity: 0;
}
</style>
