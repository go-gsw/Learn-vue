<template>
  <div class="news">
  <!-- <h1>{{msg}}</h1> -->
  <!-- update不用传值可以通过v-model的msg获得this.msg -->
  <div class="inp">
    <input type="text" v-model="msg" placeholder="输入生成列表" @keyup.enter="update" style="height:30px">
    <button @click="update" style="height:30px"> 插入列表 </button>
    <button @click="Clear" style="height:30px"> 清除列表 </button>
    <button @click="increment">+</button>
    <h2 style="display:inline">{{count}}</h2>
    <button @click="decrement">-</button>
  </div>
    <ul>
      <!-- v-text和v-html区别是v-text全部显示文本v-html会考虑html标签 -->
      <li class="FinishAndDel" v-for="item in items" v-text="item.label" v-bind:class="{finished:item.isfinished}"
          @click="toggleFinished(item)" @dblclick="delthisItem(item)">
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
  // props:['msg'],
  data () {
    return {
      // items:[
      //   {
      //     label:'coding',
      //     isfinished:true
      //   },
      //   {
      //     label:'walking',
      //     isfinished:false
      //   }
      // ],
      items:Storage.fetch(),
      msg: ''
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
  computed:{
    count(){
      return this.$store.state.counts
    }
  },
  methods:{
    update(){
      // console.log(this.msg);
      // let here=this
      if(this.msg){
        // console.log("哈哈哈"+this.items+"54544")
        // let list =Storage.fetch()
        // let hahaha=4
        // console.log(hahaha)
        // console.log(this.msg)

        this.items.push({
        label:this.msg,
        isfinished:false
      })
        // console.log(this.items)
      // console.log(this.msg)
      this.msg=""
      Storage.save()
      }else{
        alert("输入值不要为空撒！")
      }
    },
    toggleFinished(item){
      item.isfinished=!item.isfinished
    },
    delthisItem(item){
      this.items.splice(item,1);
      // console.log(this.items)
    },
    Clear(){
      // this.items.splice(0,items.length)
      this.items=[]
      this.msg=''
      Storage.save()
    },
    increment(){
      this.$store.commit('inc')
    },
    decrement(){
      this.$store.commit('dec')
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
    height: 200px;
    width: 1200px;
    /*box-sizing: border-box;*/
    /*z-index: 1;*/
  }
  .news .inp{
    display: inline-block;
    width: 100%;
    height: 50px;
    left: 50%;
    line-height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /*z-index: 2;*/
  }
  .news ul{
    /*z-index: 3;*/
    /*position: absolute;*/
    /*height: 100%;*/
    height: 150px;
    overflow: auto;
		text-align: center;
		background-color: #ddd;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: inherit;
    margin: 0 auto;
    list-style: none;
    padding:0;
	}
  .news ul li{
    line-height: 30px;
    font-weight: bold;
  }

</style>