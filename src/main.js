import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入vant 
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
import { Toast } from 'vant';
Vue.prototype.$Toast = Toast;

// axios请求
import http from '../network'
Vue.prototype.$http = http;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
