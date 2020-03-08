// 封装文章相关的请求
import myrequest from '@/utils/axiosreq.js'
function getArticleList() { 
  return myrequest({
    url:'/v1_0/user/articles',
    method:'GET'
  })
}
export { getArticleList }