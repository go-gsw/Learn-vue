<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ title }}</h3>
    <h3>{{totalMoney}}</h3>
    <h2>Essential Links</h2>
    <table class="detial">
      <tr>
        <th>商品信息</th>
        <th>商品单价</th>
        <th>商品数量</th>
        <th>总金额</th>
        <th>编辑</th>
      </tr>
      <tr v-for="(item,index) in cartList">

        <td class="goods-detials">

          <input type="checkbox" class="checkbox" v-bind:class="{'checked':item.checked}" @click="select(item)">
          
          <div class="goods-img">

            <img alt="商品图片" v-bind:src="item.imgPic">
          </div>

          <div class="good-text">

            <div class="good-name">{{item.name+"="+index}}
            </div>

            <dl class="gifts">
              <dt>赠送：</dt>
              <dd v-for="part in item.parts" v-text="part.partName"></dd>
            </dl>
          </div>
        </td>
        <td class="price">{{item.price | formatMoney}}</td>
        <td class="num">
        <div class="choosenum-handler">
              <a href="javascript:;" class="icon-minus" @click="changeMoney(item,-1)">-</a>
                <input class="countbox" style="text-align:center" size="1" max="999" type="text" value="0" v-model="item.count">
              <a href="javascript:;" class="icon-plus" @click="changeMoney(item,1)">+</a>
        </div>
        </td>
        <td class="total">{{item.price*item.count | money("元")}}</td>
        <td class="edit">
          <div class="delete">
          <a href="javascript:;">
            <icon name="del" width="20" height="20" color="#ccc"></icon>
          </a>
          </div>
        </td>
      </tr>
    </table>
    <footer>
    <div class="last">
      <div class="totalleft">
      <!-- @click里除了函数还可以写表达式：一元或三元表达式 -->
        <input type="checkbox" class="checkbox" :class="{'checked':checkAll}" v-on:click="checkall(checked)">
        <span>全选</span>
        <a class="quxiao" href="javascript:;" @click="checkall()">取消全选</a>
        <a class="quxiao" href="javascript:;">清除</a>
      </div>
      <div class="totalright">
        <span class="finalTotal">合计：{{finalTotal}}</span>
        <button class="sub">结账</button>        
      </div>
    </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      cartList:[],
      checkAll:"checked"
      // title: 'hello,vue'
    }
  },
  filters:{
    //过滤器
    formatMoney:function(value){
      //前端toFixed会有精度丢失
      //数据应该由后端返回带精度值
      return "￥"+value.toFixed(2);
    }
  },
  mounted:function(){
    this.$nextTick(function(){
      this.cartView();
    })
  },
  methods:{
    cartView:function(){
      // 为了减少作用域链的搜索，设定一个局部变量接受this.
      //chrome浏览器下的webkit内核考虑安全因素禁用正向反向缓存。
      //response被重新封装。
      let _this=this;
      //箭头函数作用域已经指向了外层。
      axios.get("static/resource/cart.json").then((res)=>{
        console.log(res);
        this.msg = res.data.result.list.hahaha;
        this.cartList =res.data.result.list;
        this.totalMoney =res.data.result.totalMoney;
      });
        // .catch(function(res){ 
        // catch方法用于捕捉程序的异常，catch和errorCallback是不同的，
        // errorCallback只是在响应失败的时候调用，而catch是在整个请求到响应的
        // 过程中，只要程序出现错误就会被调用。
        // console.log(res);
      // });
    },
    changeMoney:function(cart,way){
      if (way>0) {
        cart.count++;
      }else{
        cart.count--;
        if(cart.count<1){
          cart.count=1;
        }
      }
    },
    select:function(item){
      /*if(typeof item.checked=='undefind'){
        this.$set(item,"checked",checked);
      }else{
        Vue.delete(item,"checked");
      }*/
    },
    checkall:function(flag){
      // this.checkAll =flag;
         if(flag!=''){
            this.$set(this,"checked",flag);
          }else{
            this.$delete(this,"checked");
          }
        this.cartList.forEach((item,index)=>{
          /*if(typeof item.checked=='undefind'){
          this.$set(item,"checked",checked);
          //this.$set(item,"checked",true);
          }else{
          this.delete(item,"checked");
          }*/
          if(flag==checked){
            this.$set(item,"checked",flag);
          }else{
            this.$delete(item,"checked");
          }
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 ,h3{
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
