import axios from 'axios';
import * as constants from './constants';

const changeDetail = (data) => ({
    type: constants.CHANGE_DETAIL,
    detail: data
});
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/get/article').then((res) => {
            const result = res.data;
            dispatch(changeDetail(result));
        })
    }
};