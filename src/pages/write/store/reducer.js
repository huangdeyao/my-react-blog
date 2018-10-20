import {fromJS} from 'immutable';
import {constants} from './index';
import axios from "axios";

const defaultState = fromJS({
    writing: false,
    release: false,
    article: '132312'
});

const addArticle = (state) => {
    const content = JSON.stringify(state.get('article'));
    console.log(content);
    const params = {
        'content': JSON.stringify(state.get('article'))
    };

    axios.post('http://localhost:8080/api/add/article', params).then(res => {
        const result = res.data.data;
        console.log(result)
    }).catch(error => {
        console.log(error)
    });

    // axios.get('http://localhost:8080/api/add/article?content=' + content).then((res) => {
    //     const result = res.data.data;
    //     console.log(result)
    // });
    return state
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.WRITING_HANDLE:
            return state.set('writing', action.value);
        case constants.RELEASE_ARTICLE:
            return addArticle(state, action);
        case constants.ARTICLE_VALUE:
            return state.set('article', action.value);
        default:
            return state;
    }
}