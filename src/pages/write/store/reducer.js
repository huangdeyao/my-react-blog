import {fromJS} from 'immutable';
import {constants} from './index';
import {INIT_DATA} from './initData'

const defaultState = fromJS({
    headerToolBar: INIT_DATA.get('headerToolBar')
});

const handleEditable = (state, id) => {
    const newState = defaultState.setIn(['headerToolBar', id, 'click'], !state.getIn(['headerToolBar', id, 'click']));
    return state.merge({headerToolBar: newState.get('headerToolBar')}
    );
};


export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.EDITABLE_TYPES:
            return handleEditable(state, action.id);
        default:
            return state;
    }
}