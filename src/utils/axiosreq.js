// 封装axios
import axios from 'axios'
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn'
// Vue.prototype.$axios = axios
const myrequest = axios.create({
  baseURL:'http://ttapi.research.itcast.cn/app'
})
export default myrequest