

// Get all reviews for specific Rig
//GET    /api/carlistings/:carlisting_id/reviews
export const getRigReviews = carlistingID => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}/reviews`,
        method: "GET"
    })
}

// show review
// GET    /api/reviews/:id
export const showReview = reviewID => {
    return $.ajax({
        url: `/api/reviews/${reviewID}`,
        method: "GET",
    })
}

// update review
// PATCH  /api/reviews/:id
export const updateReview = review => {
    return $.ajax({
        url: `/api/reviews/${review.id}`,
        method: "PATCH",
        data: {review}
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