/*引入Vue框架*/
import Vue from 'vue';
/*引入资源请求插件*/
import axios from 'axios';
// axios.defaults.timeout = 5000

const request = axios.create({
    // baseURL: 'http://47.96.67.198:8861/', //测试地址
    // baseURL: 'http://39.100.58.46:8000', 
    baseURL: 'http://ios.guanqi2019.com:8000/',
    // baseURL: 'https://m.hfieta.com/web2/',
    // baseURL: 'http://39.98.71.27:8000',
    timeout: 10000, // 请求超时
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        'token': localStorage.getItem('authorization') || '' 
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
    // let token = localStorage.getItem('authorization')
    // if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    //     config.headers.authorization = token;
    // }
    return config;
}, (error) => {
    return Promise.reject(error);
});
/*使用axios插件*/
Vue.prototype.$axios = request;
// Vue.prototype.HOME = 'http://47.99.185.0:8088/'
// Vue.prototype.FILE = 'http://47.99.185.0:8088/alapolicefile/'
export default request
