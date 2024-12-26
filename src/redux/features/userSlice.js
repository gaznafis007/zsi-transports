const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    data: {
        token: "",
        user: {
            email: "testuser@gmail.com",
            name: "Test User",
            category: null,
            email_verified: false
        }
    },
    isError: false,
    error: null,
    status_code: 200
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})


export default userSlice.reducer