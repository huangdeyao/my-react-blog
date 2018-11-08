import {fromJS} from 'immutable';
import {constants} from './index';
import uploadUrl from "../../../api/config";
import {Buffer} from "buffer";
import axios from "axios";

const defaultState = fromJS({
    release: false,
    content: '',
    loading: false,
    imageUrl: '',
    imageUrlId: '',
    title: '',
    tags: [],
    tagsModel: false,
    articleId: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.RELEASE_ARTICLE:
            return handleOk(state);
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

const handleOk = (state) => {
    const content = state.get('content');
    const params = {
        'author': 'author',
        'title': state.get('title'),
        'content': Buffer(content).toString('base64'),
        'imageUrl': state.get('imageUrl'),
        'imageUrlId': state.get('imageUrlId'),
        'likes': 12
    };
    axios.post(uploadUrl.article_add, params).then(res => {
        const result = res.data.data;
        console.log(result);
        return state.merge({
            release: true,
            articleId: result.id
        });
    }).catch(error => {
        console.log(error);
        return state.set('release', false);
    });
};
