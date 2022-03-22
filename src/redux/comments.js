import {COMMENTS} from '../shared/comments';

// reducer function takes 2 parameters, first is current state, second parameter takes an action object
export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        default:
            return state;
    }
};