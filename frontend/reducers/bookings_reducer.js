import {
    RECEIVE_BOOKINGS,
    RECEIVE_BOOKING,
    DELLETE_BOOKING
} from "../actions/bookings_actions";


const BookingsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BOOKINGS:
            
            return action.bookings;

        case RECEIVE_BOOKING:
            nextState = action.booking;
            return nextState;

        case DELLETE_BOOKING:
            delete nextState[action.bookingId];
            return nextState;
        default:
            return oldState;
    }
}

export default BookingsReducer;