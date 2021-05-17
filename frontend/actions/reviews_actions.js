import * as ReviewApiUtil from "./util/reviews_api_util"

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELLETE_REVIEW = "DELLETE_REVIEW";


// POJOS

const receiveReviewss = reviews => {
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


export const fetchReviews = () => dispatch => {
    return ReviewApiUtil.getReviewss()
        .then(reviews => dispatch(receiveReviews(reviews)))
};

export const fetchReview = id => dispatch => {
    return ReviewApiUtil.showReview(id)
        .then(review => dispatch(receiveReview(review)))
};

export const createReview = review => dispatch => {
    return ReviewApiUtil.createCarlisting(review)
        .then(newReview => dispatch(receiveReview(newReview)))
};

export const updateReview = review => dispatch => {
    return ReviewApiUtil.updateReview(review)
        .then(updatedReview => dispatch(receiveReview(updatedReview)))
};

export const deleteReview = id => dispatch => {
    return ReviewApiUtil.deleteReview(id)
        .then(() => dispatch(removeReview(id)))
};