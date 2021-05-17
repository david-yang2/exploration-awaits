

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
    debugger
    return $.ajax({
        url: `/api/carlistings/${carlistingID}`,
        method: "GET",
    })
}

// update carlisting
// GET /api/carlistings/:id
export const updateCarlisting = carlistingID => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}`,
        method: "PATCH",
        data: {carlisting: carlisting}
    })
}

// create carlisting
// POST /api/carlistings
export const createCarlisting = () => {
    return $.ajax({
        url: `/api/carlistings`,
        method: "POST",
        data: {carlisting: carlisting}
    })
}

// delete carlisting
// DELETE /api/carlistings/:id
export const deleteCarlisting = carlistingID => {
    return $.ajax({
        url: `/api/carlistings/${carlistingID}`,
        method: "DESTROY"
    })
}