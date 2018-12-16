import {fromJS} from 'immutable';
import {constants} from './index';
import anIcon from '../../../statics/2.jpeg';

const defaultState = fromJS({
    login: false,
    token: '1312312312312312',
    imgUrl: anIcon,
    loading: false
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGIN_OUT:
            return state.set('login', action.value);
        case constants.HANDLE_CHANGE_LOADING:
            return state.set('loading', action.value);
        default:
            return state;
    }
}