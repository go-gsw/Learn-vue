<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>{{$router.params.id}}</h2> -->
      <!-- <ul>
        <li>
          <router-link to="/Hello/:id">VUE</router-link>
        </li>
        <li>
          <router-link to="/Hello/:id">地址列表</router-link>
        </li>
      </ul> -->
      <div id="router-link">
      <!-- /表示默认加载的主路由 -->
      <router-link to="/">news</router-link>
      <router-link to="/message">message</router-link>
      </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'hello',
//data(){}是ES6写法等价于data:function (){return...}
  data () {
    return {
      msg: 'GSW'
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello #router-link{
    width: 1280px;
    height: 50px;
    vertical-align: middle;
    margin: 0 auto;
    padding:0 30px;
    text-align: center;
    background: #605F5F;
    border-radius: 2px;
    box-shadow: 5px 2px 5px #eee;
}
.hello #router-link a{
    display:inline-block;
    width:150px;
    height:50px;
    line-height:50px;
    font-size:20px;
    text-align: center;
    color:#fff;
    text-decoration: none;
}
.hello #router-link a:hover{
    color: gray;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
