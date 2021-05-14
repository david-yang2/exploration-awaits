import {combineReducers} from "redux";
import SessionReducer from "./session_reducer"
import CarlistingReducer from "./carlisting_reducer"

const RootReudcer = combineReducers({
    carlisting: CarlistingReducer,
    session: SessionReducer

});

export default RootReudcer;