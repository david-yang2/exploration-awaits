

// Get all carlistings
// GET /api/carlistings
export const getCarlistings = () => {
    return $.ajax({
        url: `/api/carlistings`,
        method: "GET"
    })
}

// show carlisting
// GET /api/carlistings/:id
export const showCarlisting = carlistingID => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}`,
        method: "GET",
        data: {carlisting}
    })
}

// update carlisting
// GET /api/carlistings/:id
export const updateCarlisting = carlistingID => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}`,
        method: "PATCH",
        data: {carlisting}
    })
}

// create carlisting
// POST /api/carlistings
export const updateCarlisting = () => {
    return $.ajax({
        url: `/api/carlistings`,
        method: "POST",
        data: {carlisting}
    })
}

// delete carlisting
// DELETE /api/carlistings/:id
export const updateCarlisting = carlistingID => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}`,
        method: "DESTROY"
    })
}