import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';
// reducer function takes 2 parameters, first is current state, second parameter takes an action object
export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString;
            return state.concat(comment);
        default:
            return state;
    }
};