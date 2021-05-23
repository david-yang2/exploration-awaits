import * as BookingsApiUtil from "../util/bookings_api_util";
import { DELLETE_REVIEW } from "./reviews_actions";

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS"
export const RECEIVE_BOOKING = "RECEIVE_BOOKING"
export const DELETE_BOOKING = "DELETE_BOOKING"


// POJOs

const receiveBookings = bookings => {
    return {
        type: RECEIVE_BOOKINGS,
        bookings
    }
}

const receiveBooking = booking => {
    return {
        type: RECEIVE_BOOKINGS,
        booking
    }
}

const deleteBooking = bookingId => {
    return{
        type: DELLETE_REVIEW,
        bookingId
    }
}


// THUNK ACtion Creators

export const fetchBookings = userId =>{
    return BookingsApiUtil.fetchUserBookings(userId)
        .then(usersBookings => dispatc(receiveBookings(usersBookings)))
}

export const createNewBooking = booking =>{
    return BookingsApiUtil.createBooking(booking)
        .then(newBooking => dispatc(receiveBooking(newBooking)))
}

export const deleteBooking = booking => {
    return BookingsApiUtil.deleteReview(booking)
        .then(() => dispatchEvent(deleteBooking(booking.id)))
}