import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://article.yrclubs.com';

axios.interceptors.request.use(
    config => {
        config.auth = {username: 'devglan-client', password: 'devglan-secret'};
        config.headers = {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'}
        return config
    },
    error => {
        return Promise.reject(error)
    });
