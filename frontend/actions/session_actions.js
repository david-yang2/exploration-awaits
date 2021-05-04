import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER ="RECEIVE_CURRENT_USER";
export const LOG_OUT_CURRENT_USER ="LOG_OUT_CURRENT_USER";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user 
});


const logoutCurrentUser = () => ({
    type: LOG_OUT_CURRENT_USER,
});


export const createNewUser = formUser => dispatch => {
    return SessionApiUtil.postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
};

export const login = formUser => dispatch => {
    return SessionApiUtil.postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))

};


export const logout = () => dispatch => {
    return SessionApiUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
};