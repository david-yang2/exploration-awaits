import * as TripsApiUtil from '../util/trips_api_util'

export const RECEIVE_TRIPS = "RECEIVE_TRIPS"


const receiveTrips = trips => {
    return {
        type: RECEIVE_TRIPS,
        trips
    }
}


export const fetchTrips = carId => dispatch => {
    return TripsApiUtil.getTrips(carId)
    .then(trips => dispatch(receiveTrips(trips)))
};