import axios from "axios/index";
import {constants} from './index';
import {fromJS} from 'immutable';
import homeList from './../../../api/config';

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

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get(homeList.article_get_all).then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        });
    }
};

