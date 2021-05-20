import {
    ALL_USERS,
    CURRENT_USER
} from "../actions/user_actions";

const UsersReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case ALL_USERS:
            debugger
            return action.users;

        case CURRENT_USER:
            return action.user;

        default:
            return oldState;
    }
}

export default UsersReducer;