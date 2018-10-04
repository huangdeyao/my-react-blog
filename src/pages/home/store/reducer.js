import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeDate = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeDate(state, action);
        case constants.ADD_ARTICLE_LSIT:
            return addArticleList(state, action);
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}