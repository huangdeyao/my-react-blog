import {constants} from './index';
import axios from 'axios';
import login from './../../../api/config';

// const changeLogin = () => ({
//     type: constants.CHANGE_LOGIN,
//     value: true
// });

export const loginOut = () => ({
    type: constants.LOGIN_OUT,
    value: false
});

// axios.interceptors.request.use(
//     config => {
//         config.auth = {username: 'article-client', password: 'article-secret'};
//         config.headers = {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'};
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     });

// export const loginAccount = (username, password) => {
//     return (dispatch) => {
//         axios.get(login.get_token + '?grant_type=password&username=' + username + '&password=' + password)
//             .then((res) => {
//                 // const result = res.data;
//                 if (res.status) {
//                     dispatch(changeLogin());
//                 } else {
//                     alert("登录失败！");
//                 }
//             })
//     }
// };
//
export const loginAccount = (username, password) => {
    return (dispatch) => {
        // axios.interceptors.request.use(
        //     config => {
        //         config.auth = {username: 'devglan-client', password: 'devglan-secret'};
        //         return config
        //     },
        //     error => {
        //         return Promise.reject(error)
        //     });
        axios({
                // auth: {username: 'article-client', password: 'article-secret'},
                headers: {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'},
                method: 'post',
                url: login.get_token + '?client-id=article-client&client-secret=article-secret',
                data: {
                    username: username,
                    password: password,
                    grant_type: password
                }
            }
        ).then((res) => {
            console.log(res)
        })
    }
};



