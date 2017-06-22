import {
    SET_USER_DETAILS
} from '../actions/User';

export const user = (state = {}, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return action.userDetails;

        default:
            return state;
    }
};
