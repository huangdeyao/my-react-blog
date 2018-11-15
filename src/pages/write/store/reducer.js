import {fromJS} from 'immutable';
import {constants} from './index';


const defaultState = fromJS({
    release: false,
    content: '',
    loading: false,
    imageUrl: 'http://huangdeyao-1251741670.cos.ap-chengdu.myqcloud.com/article/20181115042915275.jpg',
    imageUrlId: '',
    title: '',
    tags: [],
    tagsModel: false,
    articleId: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.RELEASE_ARTICLE:
            return state.merge({
                release: fromJS(action.release),
                articleId: fromJS(action.articleId)
            });
        case constants.RELEASE_MODEL:
            return state.set('tagsModel', action.tagsModel);
        case constants.ARTICLE_VALUE:
            return state.set('content', action.content);
        case constants.ARTICLE_TITLE_HANDLE_CHANGE:
            return state.set('title', action.title);
        case constants.ARTICLE_UPLOAD:
            return imageUpload(state, action);
        default:
            return state;
    }
}


const imageUpload = (state, action) => {
    return state.merge({
        imageUrl: fromJS(action.imageUrl),
        loading: fromJS(action.loading)
    });
};

