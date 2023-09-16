import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts'
        }),
    })
});
 export const {getPosts}=baseApi
export default baseApi;