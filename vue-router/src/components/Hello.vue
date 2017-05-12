<template>
  <div class="hello">
    <div id="msg">
      <h1>{{ msg }}</h1>
    </div>
    <!-- <p>{{count}}</p>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div> -->
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
      <!-- exact表示地址完全匹配时才被激活 -->
      <router-link to="/Hello/news" active-class="H-link-active" exact>news</router-link>
      <router-link to="/Hello/message" active-class="H-link-active" exact>message</router-link>
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
  },
  // methods:{
  //   increment(){
  //     store.commit('increment')
  //   },
  //   decrement(){
  //     store.commit('decrement')
  //   }
  // },
  // computed:{
  //   count(){
  //     return store.state.count
  //   }
  // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    width: 1200px;
    /*text-align: center;*/
    margin: 10px auto;
    height: 300px;
    background-color: #999;
    box-sizing: border-box;
}
.hello #msg{
    width: inherit;
    text-align: left;
    line-height: 50px;
    height: 50px;
    margin:0;
}
.hello #router-link{
    width: inherit;
    top: 50px;
    height: 50px;
    vertical-align: middle;
    margin: auto;
    padding:0 ;
    text-align: center;
    background: #aaa;
    /*border-radius: 2px;*/
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 10;
    /*box-shadow: 5px 0 5px #eee;*/
}
.hello #router-link a{
    display:inline-block;
    width:150px;
    height:50px;
    line-height:50px;
    font-size:20px;
    text-align: center;
    /*color:#fff;*/
    text-decoration: none;
}
/*.hello #router-link a:hover{
    color: gray;
}*/
/*.hello #router-link a.isactive{
  color: black;
}*/
/*.hello #router-link a:visited{
  color: #fff;
}*/
h1, h2 {
  font-weight: bold;
  margin:0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

/*a.router-link-active{
  color: black;
}*/
a.H-link-active{
  color: green;
}
</style>
