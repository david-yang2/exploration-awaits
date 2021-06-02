




// get trips for specific carlisting
//GET    /api/carlistings/:carlisting_id/trips

export const fetchTrips = carlisting_id => {
    return $.ajax({
        url: `/api/carlistings/${carlisting_id}/trips`,
        method: "GET"
    })
}