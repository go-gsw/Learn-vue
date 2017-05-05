<template>
  <div class="news">
  <h1>{{msg}}</h1>
  <!-- update不用传值可以通过v-model的msg获得this.msg -->
  <input type="text" v-model="msg" @keyup.enter="update">
    <ul>
      <li v-for="item in items" v-text="item.label" v-bind:class="{finished:item.isfinished}"
          @click="toggleFinished(item)">
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
      msg: ''
    }
  },
  watch:{
    items:{
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
  }
}
}
</script>
<style>
  .finished{
    /*text-decoration: underline;*/
    color: #fff;
  }
	.news ul{

		text-align: center;
		background-color: #ccc;
    width: 1000px;
    margin: 20px auto;
    list-style: none;
    padding:0;
	}
  .news ul li{
    line-height: 30px;
    font-weight: bold;
  }
</style>