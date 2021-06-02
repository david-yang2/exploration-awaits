import {combineReducers} from "redux";
import SessionReducer from "./session_reducer"
import CarlistingsReducer from "./carlistings_reducer"
import ReviewsReducer from "./reviews_reducer"
import UsersReducer from "./user_reducer"
import BookingsReducer from "./bookings_reducer"
import TripsReducer from "./trips_reducer"

const RootReudcer = combineReducers({
    carlistings: CarlistingsReducer,
    session: SessionReducer,
    reviews: ReviewsReducer,
    user: UsersReducer,
    bookings: BookingsReducer,
    trips: TripsReducer,

});

export default RootReudcer;