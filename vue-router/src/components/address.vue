<template>
	<div class="address">
		<div id="msg">
          <h1>{{ message }}</h1>
        </div>
	<div id="router-link">
      <!-- /表示默认加载的主路由 -->
      <router-link to="/Address/message" active-class="D-link-active" exact>message</router-link>
      <router-link to="/Address/news" active-class="D-link-active" exact>news</router-link>
      </div>
    <router-view></router-view>	
	</div>
</template>
<script>
export default{
	name:'address',
	data(){
		return	{
			message:'hello,gsw'

		}
	}
}
</script>
<style scoped>
.address{
    width: 1200px;
    /*text-align: center;*/
    margin: 10px auto;
    background-color: #999;
    height: 300px;
}
.address #msg{
    width: inherit;
    text-align: left;
    line-height: 50px;
    height: 50px;
}
.address #router-link{
	width: inherit;
    top: 50px;
    height: 50px;
    vertical-align: middle;
    margin: 0 auto;
    padding:0 ;
    text-align: center;
    background: #aaa;
    border-radius: 2px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /*box-shadow: 5px 0 5px #eee;*/
}
.address #router-link a{
    display:inline-block;
    width:150px;
    height:50px;
    line-height:50px;
    font-size:20px;
    text-align: center;
    /*color:#fff;*/
    text-decoration: none;
}
a.D-link-active{
    color: yellow;
}
</style>