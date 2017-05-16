<template>
  <div class="message">
  <div class="mestest">
    <h1>子要向父组件通信过去的值：</h1>
  </div>
  <input type="text" v-model="message" @keyup.enter='speakToFather'  placeholder="输入值传向父组件" style="height:40px">
  <h2>{{msgfromfatherComponent}}</h2>
    <ul>
      <button v-on:click="speakToFather" style="height:30px">传递按钮</button>
    </ul>
  </div>
</template>
<script>
import Emoji from 'node-emoji'

export default {
  name: 'message',
  //子组件必须声明props想获取的父组件信息
  props:['msgfromfatherComponent'],
  data () {
    return {
      message: ''
    }
  },
  methods:{
    speakToFather(){
      let mess=Emoji.get('joy');
      console.log(mess)
      this.$emit('children-tell-father',this.message+mess)
      this.message=''
    }
  }
}
</script>
<style>
  .message{
    background-color: #eee !important;
  }
  .message .mestest{
    height: 50px;
    line-height: 50px;
  }
	.message ul{
    width: 100px;
    margin: 0 auto;
		text-align: center;
		background-color: #eee !important;
    list-style: none;
    padding:0;
	}
</style>