import axios from 'axios';
import * as constants from './constants';
import uploadUrl from "../../../api/config";

const changeDetail = (data) => ({
    type: constants.CHANGE_DETAIL,
    detail: data
});
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get(uploadUrl.article_get_details + id).then((res) => {
            const result = res.data;
            dispatch(changeDetail(result.data));
        })
    }
};