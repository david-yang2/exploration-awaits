import {
    RECEIVE_ALL_BOOKINGS,
    RECEIVE_BOOKING,
    DELETE_BOOKING
} from "../actions/bookings_actions";


const BookingsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_BOOKINGS:
            
            return action.bookings;

        case RECEIVE_BOOKING:
            nextState = action.booking;
            return nextState;

        case DELETE_BOOKING:
            let pos = 0
            
            Object.values(nextState).map((booking,idx) => {
                if (booking.id === action.bookingId)
                    {pos = idx}})

            delete nextState[pos]
            return nextState;
        default:
            return oldState;
    }
}

export default BookingsReducer;