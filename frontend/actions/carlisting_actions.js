import * as CarlistingApiUtil from "../util/carlistings_api_util"


// POJOs

export const RECEIVE_ALL_CARLISTINGS = "RECEIVE_ALL_CARLISTINGS";
export const RECEIVE_CARLISTING = "RECEIVE_CARLISTING";
export const CREATE_CARLISTING = "CREATE_CARLISTING";
export const UPDATE_CARLISTING = "UPDATE_CARLISTING";
export const DELLETE_CARLISTING = "DELLETE_CARLISTING";

const receiveCarlistings = carlistings => {
    return {
        type: RECEIVE_ALL_CARLISTINGS,
        carlistings
    }
};

const receiveCarlisting = carlisting => {
    return {
        type: RECEIVE_CARLISTING,
        carlisting
    }
};

const createCarlisting = carlisting => {
    return {
        type: CREATE_CARLISTING,
        carlisting
    }
};

const updateCarlisting = carlisting => {
    return {
        type: UPDATE_CARLISTING,
        carlisting
    }
};

const removeCarlisting = carlistingId => {
    return {
        type: DELLETE_CARLISTING,
        carlistingId
    }
};





// THUNK Action Creators

