var vm = new Vue({
	el: "#app",
	data: {
		title:"hello,vue",
		msg:"fuck you",
		cartList:[],
		totalMoney:0,
	},
	filters:{

	},
	mounted:function(){
		this.cartView();
	},
	methods:{
		cartView:function(){
			var _this=this;
			//chrome浏览器下的webkit内核考虑安全因素禁用正向反向缓存。
			this.$http.get("../resource/cart.json").then(function (res){
				_this.cartList=res.result.list;
				_this.totalMoney=res.result.totalMoney;
			});
		}
	}
})