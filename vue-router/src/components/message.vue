<template>
  <div class="message">
  <h1>{{message}}</h1>
    <ul>
      <li>{{message}}</li>
      <li>{{message}}</li>
      <li v-on:click="speakToFather">{{msgfromfatherComponent}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'message',
  //子组件必须声明props想获取的父组件信息
  props:['msgfromfatherComponent'],
  data () {
    return {
      message: 'Welcome !'
    }
  },
  methods:{
    speakToFather(){
      this.$emit('children-tell-father',this.message)
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