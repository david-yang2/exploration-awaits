import * as BookingsApiUtil from "../util/bookings_api_util";

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";


// POJOs

const receiveBookings = bookings => {
    return {
        type: RECEIVE_ALL_BOOKINGS,
        bookings
    }
}

const receiveBooking = booking => {
    return {
        type: RECEIVE_BOOKING,
        booking
    }
}

const deleteBooking = bookingId => {
    return{
        type: DELETE_BOOKING,
        bookingId
    }
}


// THUNK ACtion Creators

export const fetchBookings = userId => dispatch =>{
    return BookingsApiUtil.fetchUserBookings(userId)
        .then(usersBookings => dispatch(receiveBookings(usersBookings)))
}

export const createNewBooking = booking => dispatch => {
    return BookingsApiUtil.createBooking(booking)
        .then(newBooking => dispatch(receiveBooking(newBooking)))
}

export const removeBooking = booking => dispatch => {
    return BookingsApiUtil.destroyBooking(booking)
        .then(() => dispatch(deleteBooking(booking.id)))
}