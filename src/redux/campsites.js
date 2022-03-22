import {CAMPSITES} from '../shared/campsites';

// reducer function takes 2 parameters, first is current state, second parameter takes an action object
export const Campsites = (state = CAMPSITES, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
