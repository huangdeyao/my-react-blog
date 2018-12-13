import {fromJS} from 'immutable';
import {constants} from './index';
import anIcon from '../../../statics/2.jpeg';

const defaultState = fromJS({
    login: false,
    token: '1312312312312312',
    imgUrl: anIcon
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGIN_OUT:
            return state.set('login', action.value);
        default:
            return state;
    }
}