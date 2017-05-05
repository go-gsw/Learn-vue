// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


//import是ES6写法等价于var App =require('./App')
import Vue from 'vue'
import App from './App'
import router from './router'
import AddloadEvent from './addloadEvent'

Vue.use(AddloadEvent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})
// new AddloadEvent(ApploadChange)

function addloadEvent(ApploadChange){
	var oldonload=window.onload;
	console.log(oldonload);
	if(typeof window.onload !="function"){
		window.onload=ApploadChange;
	}else{
		window.onload=function(){
			oldonload();
			ApploadChange();
		}
	}
}

function ApploadChange(){
  var routerlist=document.getElementById('list-group')
  console.log(routerlist);
  var list=routerlist.getElementsByTagName('a');
  for(var i=0;i<list.length;i++){
    list[i].onclick= function changelist(){
      for(var j=0;j<list.length;j++){
        if(list[j]==this){
          this.style.color="#ccc";
        }else{
          list[j].style.color="#fff";
        }
      }
    };
  }
}
// AddloadEvent(ApploadChange)

// window.onload=function(){
// var list=document.getElementsByTagName('a');
// console.log(list);
// for(var i=0;i<list.length;i++){
//   list[i].onclick= function changelist(){
//     for(var j=0;j<list.length;j++){
//       if(list[j]==this){
//         this.style.color="#ccc";
//       }else{
//         list[j].style.color="#fff";
//       }
//     }
//   };
// }
// }
