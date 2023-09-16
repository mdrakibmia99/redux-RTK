import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getSpecificPost:builder.query({
            query:(id)=> `/posts/${id}`
        })
    })
});
//  useGetPostsQuery return an obejct  
export const {useGetPostsQuery,useGetSpecificPostQuery}=baseApi

export default baseApi;