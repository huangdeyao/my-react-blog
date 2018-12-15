import axios from 'axios'
import Util from './../util/util'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://article.yrclubs.com';

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token');
        if (Util.isEmpty(token)) {
            config.auth = {username: 'article-client', password: 'article-secret'};
            config.headers = {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'}
        }
        // else {
        //     config.headers = {'Content-type': 'application/json; charset=utf-8'};
        // }

        return config
    },
    error => {
        return Promise.reject(error)
    });
// 添加响应拦截器即异常处理
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求错误';
                    break;
                case 401:
                    error.message = '未授权，请登录';
                    window.localStorage.setItem("access_token", null);
                    window.localStorage.setItem("refresh_token", null);
                    window.location.href = '#/login';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = `请求地址出错`;
                    break;
                case 408:
                    error.message = '请求超时';
                    break;
                case 500:
                    error.message = '服务器内部错误';
                    break;
                case 501:
                    error.message = '服务未实现';
                    break;
                case 502:
                    error.message = '网关错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                case 504:
                    error.message = '网关超时';
                    break;
                case 505:
                    error.message = 'HTTP版本不受支持';
                    break;
                default:
            }
        } else {
            error.message = '服务器出错';
            window.location.href = '#/login'
        }
        return Promise.reject(error)
    }
);

export default {
    fetchGet(url) {
        const token = localStorage.getItem('access_token');
        if (token !== '') {
            if (url.indexOf("?") !== -1) {
                url = url + '&access_token=' + token
            } else {
                url = url + '?access_token=' + token
            }
        }
        return new Promise((resolve, reject) => {
            axios.get(url).then(res => {
                resolve(res.data)
            }).catch(error => {
                console.log(error);
                reject(error)
            })
        })
    },
    fetchPost(url, params = {}) {
        const token = localStorage.getItem('access_token');
        if (!Util.isEmpty(token)) {
            url = url + '?access_token=' + token
        }
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                resolve(res)
            }).catch(error => {
                console.log(error);
                reject(error)
            })
        })
    }
}