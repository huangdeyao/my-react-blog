import axios from 'axios';
import * as constants from './constants';

const changeDetail = (data) => ({
    type: constants.CHANGE_DETAIL,
    detail: data
});
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result));
        })
    }
};