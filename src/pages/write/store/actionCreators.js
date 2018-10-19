import {constants} from './index';

export const handleOnClick = (id) => ({
    type: constants.EDITABLE_TYPES,
    id
});

