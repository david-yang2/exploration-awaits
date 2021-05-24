
// Get all bookings for User
//GET    /api/users/:user_id/bookings

export const fetchUserBookings = userId => {
    return $.ajax({
        url: `/api/users/${userId}/bookings`,
        method: "GET",
    })
}



// Create Booking
// POST   /api/users/:user_id/bookings

export const createBooking = booking => {
    return $.ajax({
        url: `/api/users/${booking.user_id}/bookings`,
        method: "POST",
        data: {booking: booking}
    })
}



// Delete Booking
// DELETE /api/bookings/:id

export const destroyBooking = booking => {
    return $.ajax({
        url: `/api/booking/${booking.id}`,
        method: "DESTROY"
    })
}

