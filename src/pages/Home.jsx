import { useForm } from "react-hook-form";
import PostCard from "../components/PostCard"
import { useGetPostsQuery, useGetSpecificPostQuery, useSetPostMutation } from "../redux/features/api/baseApi"

function Home() {
  const { register, handleSubmit } = useForm()
  // useGetPostsQuery return a object
  // const { isError, isLoading, data: posts } = useGetPostsQuery();
  const { isError, isLoading, data: post } = useGetSpecificPostQuery(1);

  const [setPost, { data: postData }] = useSetPostMutation()
  console.log(postData,)
  const onSubmit = (data) => {
    setPost({ title: "RK rakib mia", body: data.post, id: 1254 })
    console.log(postData, data)
  }

  if (isLoading) {
    return <p className="text-center text-9xl">Loading</p>
  }
  if (!isLoading && isError) {
    return <p className="text-center text-9xl">Something is wrong</p>
  }
  return (
    <div className="container mx-auto">
      <h1>Home page</h1>
      <form className="flex gap-3 py-10" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('post')} type="text" className="w-full rounded-md p-3 border border-zinc-500" />
        <button type="submit" className="bg-zinc-800 text-zinc-300 rounded-md border border-zinc-500 px-3">Post</button>
      </form>
      <div className="flex flex-col gap-3">
        {/* {posts?.map(post => <PostCard key={post.id} post={post}></PostCard>)} */}
        {/* <PostCard post={post}/> */}
        {postData &&
          <PostCard post={postData} />
        }
      </div>
    </div>
  )
}

export default Home