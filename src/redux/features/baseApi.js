import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) =>({
        getQuickPrices: builder.query({
            query: () => '/api/quickPriceCheck'
        })
    })
})

export const {useGetQuickPricesQuery} = baseApi
