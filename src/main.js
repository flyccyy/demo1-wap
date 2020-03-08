import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import axios from 'axios'
// import VeeValidate from 'vee-validate'
import { Button,Form,Field,Tabbar, TabbarItem,NavBar,Tab, Tabs,List,Cell,PullRefresh    } from 'vant'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config.headers.Authorization='Bearer ${}';
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// Vue.use(VeeValidate)
Vue.use(Button).use(Form).use(Field).use(Tabbar).use(TabbarItem).use(NavBar).use(Tab).use(Tabs).use(List).use(Cell).use(PullRefresh)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
