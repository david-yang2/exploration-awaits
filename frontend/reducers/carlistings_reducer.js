import {
    RECEIVE_ALL_CARLISTINGS,
    RECEIVE_CARLISTING,
    DELLETE_CARLISTING 
} from "../actions/carlistings_actions";


const CarlistingsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_CARLISTINGS:
            
            return action.carlistings;

        case RECEIVE_CARLISTING:
            nextState[action.carlisting.id] = action.carlisting;
            return nextState;

        case DELLETE_CARLISTING:
            delete nextState[action.carlistingId];
            return nextState;
        default:
            return oldState;
    }
}

export default CarlistingsReducer;