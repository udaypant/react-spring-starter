import {wrapperFetch} from '../utilities/UrlUtilities';

export const SET_USER_DETAILS = 'SET_USER_DETAILS';

export const setUserDetails = (userDetails) => {
    return {
        type: SET_USER_DETAILS,
        userDetails
    };
};

export const fetchUserDetails = (project) => {
    return dispatch => {
        return wrapperFetch('/api/user')
            .then((userDetails) => {
                if (userDetails) {
                    dispatch(setUserDetails(userDetails));
                }
            });
    };
};
