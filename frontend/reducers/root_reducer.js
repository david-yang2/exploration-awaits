import {combineReducers} from "redux";
import SessionReducer from "./session_reducer"

const RootReudcer = combineReducers({
    session: SessionReducer

});

export default RootReudcer;