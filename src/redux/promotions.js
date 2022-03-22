import {PROMOTIONS} from '../shared/promotions';

// reducer function takes 2 parameters, first is current state, second parameter takes an action object
export const Promotions = (state = PROMOTIONS, action) => {
    switch(action.type) {
        default:
            return state;
    }
};