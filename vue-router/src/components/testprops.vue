<template>
  <div class="message">
  <h1>{{message}}</h1>
    <ul>
      <button v-on:click="speakToFather">{{msgfromfatherComponent}}</button>
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
      message: '子向父组件通信的值'
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
  .message{
    background-color: #ccc !important;
  }
	.message ul{
    width: 100px;
    margin: 0 auto;
		text-align: center;
		background-color: #ccc !important;
    list-style: none;
    padding:0;
	}
</style>