// 封装跟频道相关的请求
import myrequest from '@/utils/axiosreq.js'
function getChannels() { 
  return myrequest({
    url:'v1_0/user/channels',
    method:'GET'
  })
}
export {getChannels}