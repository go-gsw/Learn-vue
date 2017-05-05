<template>
	<div class="address">
		<h1>{{message}}</h1>
	<div id="router-link">
      <!-- /表示默认加载的主路由 -->
      <router-link to="/Address/">message</router-link>
      <router-link to="/Address/news">news</router-link>
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
.address #router-link{
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
.address #router-link a{
    display:inline-block;
    width:150px;
    height:50px;
    line-height:50px;
    font-size:20px;
    text-align: center;
    color:#fff;
    text-decoration: none;
}
</style>