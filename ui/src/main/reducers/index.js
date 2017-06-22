import {combineReducers} from 'redux';

import {user} from './User';

const combinedReducer = combineReducers({
    user,
});

export default combinedReducer;
