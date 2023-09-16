import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getSpecificPost: builder.query({
            query: (id) => `/posts/${id}`
        }),
        setPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
            })
        })
    })
});
//  useGetPostsQuery return an obejct  
export const { useGetPostsQuery, useGetSpecificPostQuery ,useSetPostMutation} = baseApi

export default baseApi;