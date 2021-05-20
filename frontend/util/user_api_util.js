


//Get info about the current user

export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: `GET`,
    })
};


// Get all users
export const fetchUsers =()=>{
    return $.ajax({
        url:`api/users`,
        method: `GET`,
    })
}