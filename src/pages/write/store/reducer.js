import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState = fromJS({
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.HANDLE_ONCHANGE:
            return state.set('editorState', action.value);
        default:
            return state;
    }
}