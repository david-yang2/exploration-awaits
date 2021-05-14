import * as CarlistingApiUtil from "../util/carlistings_api_util"




export const RECEIVE_ALL_CARLISTINGS = "RECEIVE_ALL_CARLISTINGS";
export const RECEIVE_CARLISTING = "RECEIVE_CARLISTING";
export const DELLETE_CARLISTING = "DELLETE_CARLISTING";

// export const CREATE_CARLISTING = "CREATE_CARLISTING";
// export const UPDATE_CARLISTING = "UPDATE_CARLISTING";

// POJOS

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

const removeCarlisting = carlistingId => {
    return {
        type: DELLETE_CARLISTING,
        carlistingId
    }
};

// const createCarlisting = carlisting => {
//     return {
//         type: CREATE_CARLISTING,
//         carlisting
//     }
// };

// const updateCarlisting = carlisting => {
//     return {
//         type: UPDATE_CARLISTING,
//         carlisting
//     }
// };





// THUNK Action Creators


export const fetchCarlistings = () => dispatch => {
    return CarlistingApiUtil.getCarlistings()
        .then(carlistings => dispatch(receiveCarlistings(carlistings)))
};

export const fetchCarlisting = id => dispatch => {
    return CarlistingApiUtil.showCarlisting(id)
        .then(carlisting => dispatch(receiveCarlisting(carlisting)))
};

export const createListing = listing => dispatch => {
    return CarlistingApiUtil.createCarlisting(listing)
        .then(newCarlisting => dispatch(receiveCarlisting(newCarlisting)))
};

export const updateListing = listing => dispatch => {
    return CarlistingApiUtil.updateCarlisting(listing)
        .then(updatedCarlisting => dispatch(receiveCarlisting(updatedCarlisting)))
};

export const updateListing = id => dispatch => {
    return CarlistingApiUtil.deleteCarlisting(id)
        .then(() => dispatch(removeCarlisting(id)))
};