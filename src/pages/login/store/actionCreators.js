import {constants} from './index';
import axios from 'axios';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const loginOut = () => ({
    type: constants.LOGIN_OUT,
    value: false
});

axios.interceptors.request.use(
    config => {
        config.auth = {username: 'devglan-client', password: 'devglan-secret'}
        config.headers = {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'}
        return config
    },
    error => {
        return Promise.reject(error)
    });

export const loginAccount = (username, password) => {
    return (dispatch) => {
        axios.post('http://47.94.144.123:8771/oauth/token?grant_type=password&username=' + username + '&password=' + password)
            .then((res) => {
                console.log(res.data);
                const result = res.data;
                if (res.status) {
                    dispatch(changeLogin());
                } else {
                    alert("登录失败！");
                }
            })
    }
};


