import {constants} from './index';
import {userLogin} from './../../../api/api'

// const changeLogin = () => ({
//     type: constants.CHANGE_LOGIN,
//     value: true
// });

export const loginOut = () => ({
    type: constants.LOGIN_OUT,
    value: false
});

export const handleChangeLoading = (loading) => ({
    type: constants.HANDLE_CHANGE_LOADING,
    value: loading
});

export const loginAccount = (values) => {
    return () => {
        let params = new URLSearchParams();
        window.localStorage.setItem("access_token", null);
        window.localStorage.setItem("refresh_token", null);
        params.append('username', values.userName);
        params.append('password', values.password);
        params.append('grant_type', 'password');
        userLogin(params).then(res => {
            if (res.status === 200) {
                window.localStorage.setItem("access_token", res.data.access_token);
                window.localStorage.setItem("refresh_token", res.data.refresh_token);
                window.location.href = '/'
            }
        }).catch(reason => {
            console.log(reason);
            console.log("异常！");
        });
    }
};



