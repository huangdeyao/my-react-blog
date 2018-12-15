import * as constants from './constants';
import {getArticleDetails} from './../../../api/api'

const changeDetail = (data) => ({
    type: constants.CHANGE_DETAIL,
    detail: data
});
export const getDetail = (id) => {
    return (dispatch) => {
        const params = new URLSearchParams();
        params.append('id', id);
        getArticleDetails(params).then(res => {
            if (res.status === 200) {
                const result = res.data.data;
                dispatch(changeDetail(result));
            }
        }).catch(reason => {
            console.log(reason)
        })
    }
};