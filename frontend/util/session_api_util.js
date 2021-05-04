
// Sign up a user
// POST to `api/users` -> api/users#create
export const postUser = user => (
    $.ajax({
        url:`api/users`,
        method: "POST",
        data: { user },
    })
);

// log in a user
// POST to `api/session` -> api/sessions#create
export const postSession = user => (
    $.ajax({
        url:`api/session`,
        method: "POST",
        data: { user },
    })
);

// log a user out
// DELETE to `api/session` -> api/sessions#destroy
export const deleteSession = () => {
    return $.ajax({
        url:`api/session`,
        method: "DELETE",
    })
};
