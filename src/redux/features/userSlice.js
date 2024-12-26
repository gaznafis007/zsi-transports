const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    data: {
        token: "",
        user: {
            email: "",
            name: "",
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
    reducers: {
        mountUser: (state, {payload}) =>{
            state.data.token = payload.token
            state.data.user.email = payload?.email
            state.data.user.name = payload?.name
            state.data.user.email_verified = payload?.email_verified
            

        }
    }
})

export const {mountUser} = userSlice.actions
export default userSlice.reducer