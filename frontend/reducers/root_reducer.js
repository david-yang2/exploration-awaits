import {combineReducers} from "redux";
import SessionReducer from "./session_reducer"
import CarlistingsReducer from "./carlistings_reducer"
import ReviewsReducer from "./reviews_reducer"
import UsersReducer from "./user_reducer"

const RootReudcer = combineReducers({
    carlistings: CarlistingsReducer,
    session: SessionReducer,
    reviews: ReviewsReducer,
    users: UsersReducer

});

export default RootReudcer;