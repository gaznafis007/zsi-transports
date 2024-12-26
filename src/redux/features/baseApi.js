import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.zsimarketing.com/api/auth/user'}),
    endpoints: (builder) =>({
        // getVehicles: builder.query({
        //     query: () => '/vehicles'
        // }),
        postUser: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            })
        })
    })
})

export const {usePostUserMutation} = baseApi
