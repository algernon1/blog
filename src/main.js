// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'  //./App.vue
import router from './router'  //./router/index.js
// import store  from './store/index'
import store  from './store/store'//组件之间传值




import './assets/style/main.scss';

// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// Vue.use(Router)

// const router = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  template: '<App></App>',//<App/>
  components: { 
  	App
  }
})



