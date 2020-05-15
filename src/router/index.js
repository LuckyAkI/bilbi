import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)


let Register = () => import('views/Register')
let Login = () => import('views/Login')
let UserInfo = () => import('views/UserInfo')
let UserDetail = () => import('views/UserDetail')

let routes = [
  // {
  //   path:'/',
  //   component:UserInfo
  // },
  {
    path: '/userinfo',
    component: UserInfo,
    meta: {
      token: true
    }
  },
  {
    path: '/userdetail',
    component: UserDetail,
    meta: {
      token: true
    }
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  }
]
let router = new Router({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  // console.log(from,to,to.meta.token)
  // 单独控制路由权限 可以试一下 routerenter 或者 组件独享的钩子
  if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.token == true) {
    Vue.prototype.$Toast.fail('用户身份失效')
    router.push('/login')
    return
  }
  next();
})

export default router;

