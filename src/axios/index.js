/*引入Vue框架*/
import Vue from 'vue';
/*引入资源请求插件*/
import axios from 'axios';
// axios.defaults.timeout = 5000

const request = axios.create({
    baseURL: 'http://47.96.67.198:8861/', 
    timeout: 10000, // 请求超时
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        // 'token': sessionStorage.getItem('authorization')  
        'token': '2dbe6524c2864873b92cd4d73512a6fe' 
    }
})
//添加请求拦截器
request.interceptors.request.use((config) => {
    //传参格式转换JSON格式
    if (config.method === 'post') {
        if (typeof (config.data) == "object") {
            config.data = JSON.stringify(config.data);
        }
    }
    let token = sessionStorage.getItem('authorization')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.authorization = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
/*使用axios插件*/
Vue.prototype.$axios = request;
// Vue.prototype.HOME = 'http://47.99.185.0:8088/'
// Vue.prototype.FILE = 'http://47.99.185.0:8088/alapolicefile/'
export default request
