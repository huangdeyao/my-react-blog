import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState = fromJS({
    login: false
});



export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}