<template>
  <div class="message">
  <h1>{{message}}</h1>
    <ul>
      <li>{{message}}</li>
      <li>{{message}}</li>
      <li>{{message}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'message',
  data () {
    return {
      message: 'Welcome !'
    }
  }
}
</script>
<style>
	.message ul{
    width: 1000px;
    margin: 0 auto;
		text-align: center;
		background-color: #EEE;
    list-style: none;
    padding:0;
	}
</style>