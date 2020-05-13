
import axios from 'axios'

let http = axios.create({
  baseURL:'http://112.74.99.5:3000/web/api'
})
http.interceptors.request.use(config => {
  console.log('请求拦截')
  return config
})

export default http