import {constants} from './index';
import {fromJS} from 'immutable';
import {getAllArticle} from './../../../api/api'

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.content,
    recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LSIT,
    list: fromJS(list),
    nextPage
});

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_SHOW,
    show
});

export const getHomeInfo = (page) => {
    return (dispatch) => {
        const params = new URLSearchParams();
        params.append('pageNo', page);
        params.append('pageSize', 5);

        getAllArticle(params).then(res => {
            if (res.status === 200) {
                const result = res.data.data;
                if (page === 0) {
                    dispatch(changeHomeData(result));
                } else {
                    dispatch(addHomeList(result.content, page + 1));
                }
            }
        }).catch(reason => {
            console.log("异常信息");
            console.log(reason);
        });
    }
};


