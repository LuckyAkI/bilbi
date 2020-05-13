
import axios from 'axios'
import Vue from 'vue'
import router from './src/router/index'

let http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})
http.interceptors.request.use(config => {
  console.log('请求拦截')
  if (localStorage.getItem('token') && localStorage.getItem('id')) {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token')
  }
  return config
})
http.interceptors.response.use(config => {
  console.log('响应拦截')
  return config
},err => {
  console.dir(Vue.$Toast)
  Vue.prototype.$Toast.fail('用户身份失效')
   router.push('/login')
})

export default http