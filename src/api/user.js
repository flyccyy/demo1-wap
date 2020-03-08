import myrequest from '@/utils/axiosreq.js'
function getUserInfo({mobile,code}) {
  return myrequest({
    url:'/v1_0/authorizations',
    Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODQ4NjkxMDEsInVzZXJfaWQiOjExNjExMTU0NzE1MzgyOTA2ODgsInJlZnJlc2giOnRydWV9.IbWMCEpklAClQ27AqNfKwNg3CyJyfJ4mwrv3jpKLEXQ`,
    method:'POST',
    data:{
      mobile,
      code
    }
  })
}
export { getUserInfo }