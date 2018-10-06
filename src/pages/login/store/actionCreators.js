import {constants} from './index';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const loginOut = () => ({
    type: constants.LOGIN_OUT,
    value: false
});

export const loginAccount = (name, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + name + '&password=' + password)
            .then((res) => {
                const result = res.data.data;
                if (result) {
                    dispatch(changeLogin());
                } else {
                    alert("登录失败！");
                }
            })
    }
};


