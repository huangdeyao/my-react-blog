import {fromJS} from 'immutable';
import {constants} from './index';
import axios from "axios";
import {Buffer} from "buffer"

const defaultState = fromJS({
    release: false,
    article: '132312',
    loading: false,
    imageUrl: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.WRITING_HANDLE:
            return state.set('writing', action.value);
        case constants.RELEASE_ARTICLE:
            return addArticle(state, action);
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
        'content': Buffer(content).toString('base64')
    };
    axios.post('http://localhost:8080/api/add/article', params).then(res => {
        const result = res.data.data;
        console.log(result)
    }).catch(error => {
        console.log(error)
    });
    return state
};

const imageUpload = (state,action) => {
    return state.merge({
        imageUrl: fromJS(action.imageUrl),
        loading: fromJS(action.loading)
    });
};