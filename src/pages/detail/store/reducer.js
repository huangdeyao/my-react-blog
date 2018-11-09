import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    article: {
        author: "",
        authorId: 0,
        content: "",
        createDate: "",
        id: "",
        imageUrl: "",
        likes: 0,
        tag: '',
        thumbnailUrl: "",
        title: ""
    }
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.set('article', fromJS(action.detail));
        default:
            return state;
    }
}