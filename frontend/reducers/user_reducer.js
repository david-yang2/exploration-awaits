import {
    CURRENT_USER
} from "../actions/user_actions";

const UsersReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case CURRENT_USER:
            // user is the payload for the CURRENT_USER action
            return action.user;

        default:
            return oldState;
    }
}

export default UsersReducer;