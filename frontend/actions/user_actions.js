import * as UserApiUtil from "../util/user_api_util";

export const ALL_USERS = "ALL_USERS";
export const CURRENT_USER = "CURRENT_USER";


const getUsers = () =>{
    return{
        type: ALL_USERS,
        users
    }
}

const getCurrentUser = user => {
    return{
    type: CURRENT_USER,
    user
    }
};

export const fetchUsers = () => dispatch =>{
    return UserApiUtil.getUsers()
    .then(users => dispatch(getUsers(users)))
}

export const fetchCurrentUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
    .then(receivedUser => dispatch(getCurrentUser(receivedUser)))
};
