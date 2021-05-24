import * as ReviewApiUtil from "../util/reviews_api_util"

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELLETE_REVIEW = "DELLETE_REVIEW";


// POJOS

const receiveReviews = reviews => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
};

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
};

const removeReview = reviewId => {
    return {
        type: DELLETE_REVIEW,
        reviewId
    }
};





// THUNK Action Creators


export const fetchReviews = rigID => dispatch => {
    
    return ReviewApiUtil.getRigReviews(rigID)
        .then(reviews => dispatch(receiveReviews(reviews)))
};

export const fetchReview = reviewId => dispatch => {
    return ReviewApiUtil.showReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
};

export const createRigReview = review => dispatch => {
    return ReviewApiUtil.createReview(review)
        .then(newReview => dispatch(receiveReview(newReview)))
};

export const updateRigReview = review => dispatch => {
    return ReviewApiUtil.updateReview(review)
        // .then(updatedReview => dispatch(receiveReview(updatedReview)))
};

export const deleteReview = id => dispatch => {
    return ReviewApiUtil.deleteReview(id)
        .then(() => dispatch(removeReview(id)))
};