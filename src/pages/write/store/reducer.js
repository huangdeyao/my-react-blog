import {fromJS} from 'immutable';
import {constants} from './index';
import {INIT_DATA} from './initData'

const defaultState = fromJS({
    editableTypes: INIT_DATA.get('editableTypes')
});

const handleEditable = (state, id) => {
    const newState = state.setIn(['editableTypes',id,'click'], !state.getIn(['editableTypes',id,'click']));
    console.log(newState.toJS());
    return state;
};


export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.EDITABLE_TYPES:
            return handleEditable(state,action.id);
        default:
            return state;
    }
}