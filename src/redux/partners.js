import {PARTNERS} from '../shared/partners';

// reducer function takes 2 parameters, first is current state, second parameter takes an action object
export const Partners = (state = PARTNERS, action) => {
    switch(action.type) {
        default:
            return state;
    }
};