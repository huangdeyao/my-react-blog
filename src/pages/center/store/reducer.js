import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
        center: ""
});

export default (state = defaultState, action) => {
    switch (action.type) {
        // case constants.CHANGE_DETAIL:
        //     return state.set('article', fromJS(action.detail));
        default:
            return state;
    }
}