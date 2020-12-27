import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

//配置新建一个 axios 实例 
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // `withCredentials` 表示跨域请求时是否需要使用凭证
  timeout: 60000 ,// request timeout
   headers: {
          'Cache-Control': 'no-cache',  //阻止IE浏览器缓存get请求
          'Pragma': 'no-cache'          //阻止IE浏览器缓存get请求
      }
})


function showError(msg) {
    Message.error({
        message: msg,
        duration: 0,
        showClose: true
    });
}

function showWarning(msg) {
    Message.warning({
        message: msg,
        duration: 5000,
        showClose: true
    });
}

// 添加请求拦截器
service.interceptors.request.use(
  config => {
     // 在发送请求之前做些什么
    //设置token
    // if (store.getters.token) {
    //   config.headers['Token'] = ''
    // }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    //对返回的值进行拦截
    if (res.status == 401) {
		showError('未经授权不允许访问')
    }
	else {
      return res;
    }
  },
  error => {  // 对响应错误做点什么
      let errMsg = error.message;
	   if (error.code === 'ECONNABORTED' && error.response === undefined)
		   errMsg = '请求超时，请稍后再试';
	   console.error(error);
	   showError(errMsg);
	   return Promise.reject(error);
  }
)

export default service
