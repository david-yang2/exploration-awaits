

// Get all reviews
// GET /api/reviews
export const getReviews = () => {
    return $.ajax({
        url: `/api/reviews`,
        method: "GET"
    })
}

// show review
// GET api/carlistings/:carlisting_id/reviews/:id
export const showReview = (carlistingID, reviewID) => {
    debugger
    return $.ajax({
        url: `/api/carlistings/${carlistingID}/reviews/${reviewID}`,
        method: "GET",
    })
}

// update review
// PATCH /api/carlistings/:carlisting_id/reviews/:id
export const updateReview = (carlistingID, reviewID) => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}/reviews/${reviewID}`,
        method: "PATCH",
        data: {review: review}
    })
}

// create review
// POST /api/carlistings/:carlisting_id/reviews
export const createReview = carlistingID => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}/reviews`,
        method: "POST",
        data: {review: review}
    })
}

// delete review
// DELETE api/carlistings/:carlisting_id/reviews/:id
export const deleteReview = reviewID => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}/reviews/${reviewID}`,
        method: "DESTROY"
    })
}