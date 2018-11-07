import {fromJS} from 'immutable';
import {constants} from './index';
import axios from "axios";
import {Buffer} from "buffer"

const defaultState = fromJS({
    release: false,
    article: '132312',
    loading: false,
    imageUrl: '',
    modelVisible: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.WRITING_HANDLE:
            return state.set('writing', action.value);
        case constants.RELEASE_ARTICLE:
            return addArticle(state, action);
        case constants.RELEASE_MODEL:
            return state.set('modelVisible', action.value);
        case constants.ARTICLE_VALUE:
            return state.set('article', action.value);
        case constants.ARTICLE_UPLOAD:
            return imageUpload(state, action);
        default:
            return state;
    }
}


const addArticle = (state) => {
    const content = state.get('article');
    const params = {
        'content': Buffer(content).toString('base64'),
        'author': 'author',
        'title': '测试文章',
        'likes': 12
    };
    axios.post('http://localhost:8081/api/add/article', params).then(res => {
        const result = res.data.data;
        console.log(result)
    }).catch(error => {
        console.log(error)
    });
    return state
};

const imageUpload = (state, action) => {
    return state.merge({
        imageUrl: fromJS(action.imageUrl),
        loading: fromJS(action.loading)
    });
};