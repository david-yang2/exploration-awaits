import {
    RECEIVE_TRIPS
} from "../actions/trips_actions";

const TripsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TRIPS:
            
            return action.trips;
            
        default:
            return oldState;
    }
}

export default TripsReducer;