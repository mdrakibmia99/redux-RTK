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
//  useGetPostsQuery return an obejct  
export const {getPosts,useGetPostsQuery}=baseApi

export default baseApi;