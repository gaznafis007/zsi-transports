import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/userSlice';
import { baseApi } from "./features/baseApi";

export const store = configureStore({
    reducer:{
        user: userSlice,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})