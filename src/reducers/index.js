import { combineReducers } from 'redux';
import {
    FETCH_ACT
} from '../actions/types';

const initialState = {};
function activity(state = initialState, action) {
    switch(action.type) {
        case FETCH_ACT:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({ activity })