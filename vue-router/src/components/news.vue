<template>
  <div class="news">
  <h1>{{msg}}</h1>
    <ul>
      <li>{{msg}}</li>
      <li>{{msg}}</li>
      <li>{{msg}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'news',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
	.news ul{
		text-align: center;
		background-color: #ccc;
    width: 1000px;
    margin: 0 auto;
    list-style: none;
    padding:0;
	}
</style>