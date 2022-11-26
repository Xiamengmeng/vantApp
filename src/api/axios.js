//封装axios
import axios from 'axios'
//配置axios的请求 默认配置
const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8001/',
    timeout: 3000,
    headers: {'Content-Type' : 'application/json'}
  });


  //添加一个请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //一般给请求头设置参数 一般该参数为token 然后后端就可以从请求头header中获取参数
    const token = localStorage.getItem('token');
    if(token){
      config.headers['X-Nideshop-Token'] = token
    } 
        // console.log(config)//对象形式。其中包含 headers请求头
    return config; 
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  
   export default instance