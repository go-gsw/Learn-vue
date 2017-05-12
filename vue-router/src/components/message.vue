<template>
  <div class="mes">
  <h1>{{message}}</h1>
    <ul>
      <li>{{message}}</li>
      <li>{{message}}</li>
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
  .mes{
    height: 200px;
    width: 1200px;
    background-color: #ccc;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
  }
  .mes h1{
    /*margin-top: 0;*/
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
	.mes ul{
    /*display: inline-block;*/
    /*position: absolute;*/
    height: 150px;
    width: inherit;
    z-index: 3;
    margin: 0 auto;
		text-align: center;
		background-color: #ddd;
    list-style: none;
    padding:0;
	}
</style>