import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
   baseURL: 'http://121.43.230.40/:9658',
   timeout: 15000
})

// 添加一个请求拦截器

 service.interceptors.request.use((config) => {


		if(config.url.indexOf("/oauth/token") != -1){
			config.headers.Authorization =store.getters.basic_auth// 登陆时候携带这个
		}else{
			config.headers.Authorization =store.getters.token// 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
		}
  
 
  return config;  //添加这一行
}, (error) => {
  return Promise.reject(error);
}); 


// 再添加一个返回拦截器
service.interceptors.response.use(
    response => {
      return response
    },
    error => {
        console.log("err  " + error) // for debug
				var errMsg = "未知错误"
        if (error.response) {
          switch (error.response.status) {
            case 400:
							errMsg = "请求错误，请检查"
              break
            case 401:
							errMsg = "登陆或已过期，请重新登陆"
              break
            case 403:
						  errMsg = "权限不足，限制访问"
							break
					  case 404:
							errMsg = "请求资源不存在"
							break
					  case 500:
							errMsg = "服务器开小差了，请稍后重试"
							break
       
          } 
        }
			 Message({
			  message: errMsg,
			  type: 'error',
			  duration: 3 * 1000,
			  showClose: true,
				offset:300,
				center:true
			})
			return Promise.reject(error.response)
	  }
)

export {service}