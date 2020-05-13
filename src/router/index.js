import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

// 注册页面
let Register = () => import('views/Register')

let routes = [
  {
    path:'/',
    component:Register
  },
   {
     path:'/register',
     component:Register
   }
]
let router = new Router({
  routes
})

export default router;

