import {
    RECEIVE_ALL_REVIEWS,
    RECEIVE_REVIEW,
    DELLETE_REVIEW
} from "../actions/reviews_actions";


const ReviewsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            
            return action.reviews;

        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;

        case DELLETE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return oldState;
    }
}

export default ReviewsReducer;