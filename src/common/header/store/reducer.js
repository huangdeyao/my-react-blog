import {constants} from './index';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    tagsList: [],
    tagName: ''
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true)
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    if (action.type === constants.TAGS_DATA) {
        return state.set('tagsList', action.tagsList)
    }
    if (action.type === constants.TAGS_VALUE) {
        return state.set('tagName', action.tagName)
    }
    return state;
}