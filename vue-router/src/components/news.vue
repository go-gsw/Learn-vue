<template>
  <div class="news">
  <!-- <h1>{{msg}}</h1> -->
  <!-- update不用传值可以通过v-model的msg获得this.msg -->
  <input type="text" v-model="msg" placeholder="输入生成列表" @keyup.enter="update">
    <ul>
      <!-- v-text和v-html区别是v-text全部显示文本v-html会考虑html标签 -->
      <li class="FinishAndDel" v-for="item in items" v-text="item.label" v-bind:class="{finished:item.isfinished}"
          @click="toggleFinished(item)" @dblclick="del(item)">
          <a @click="deleteitem">删除</a>
      </li>
      <!-- <li>{{msg}}</li>
      <li>{{msg}}</li> -->
    </ul>
  </div>
</template>
<script>
import Storage from '../Storage'
export default {
  name: 'news',
  props:['msg'],
  data () {
    return {
      /*items:[
        {
          label:'coding',
          isfinished:true
        },
        {
          label:'walking',
          isfinished:false
        }
      ],*/
      items:Storage.fetch(),
      // msg: ''
    }
  },
  watch:{
    items:{
      //深度 watcher
      //handler: function (val, oldVal) { /* ... */ },
      handler(items){
        Storage.save(items)
      },
      //深层赋值能观察key值变化
      deep:true
    }
  },
  methods:{
    update(){
      // console.log(this.msg);
      this.items.push({
        label:this.msg,
        isfinished:false
      })
      this.msg=""
      Storage.save()
    },
    deleteitem(){
      // this.items
    },
    toggleFinished(item){
      item.isfinished=!item.isfinished
    },
    del(item){
      this.items.splice(item,1);
      // console.log(this.items)
    }
}
}
</script>
<style>
  .finished{
    /*text-decoration: underline;*/
    color: #fff;
  }
  .news{
    background-color: #ccc;
    height: inherit;
    z-index: 1;
  }
	.news ul{
    overflow: auto;
		text-align: center;
		background-color: #ccc;
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    list-style: none;
    padding:0;
	}
  .news ul li{
    line-height: 30px;
    font-weight: bold;
  }
  .news ul li a{
    background-color: red;
  }
</style>