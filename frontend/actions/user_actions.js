import * as UserApiUtil from "../util/user_api_util";

export const CURRENT_USER = "CURRENT_USER";

const getCurrentUser = user => {
    return{
    type: CURRENT_USER,
    user
    }
};

export const fetchCurrentUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
    .then(receivedUser => dispatch(getCurrentUser(receivedUser)))
};