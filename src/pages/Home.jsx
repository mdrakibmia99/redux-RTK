import PostCard from "../components/PostCard"
import { useGetPostsQuery, useGetSpecificPostQuery } from "../redux/features/api/baseApi"

function Home() {
  // useGetPostsQuery return a object
  // const { isError, isLoading, data: posts } = useGetPostsQuery();
  const { isError, isLoading, data: post } = useGetSpecificPostQuery(1);
  if(isLoading){
    return <p className="text-center text-9xl">Loading</p>
  }
  if(!isLoading && isError){
    return <p className="text-center text-9xl">Something is wrong</p>
  }
  return (
    <div className="container mx-auto">
      <h1>Home page</h1>
      <div className="flex flex-col gap-3">
        {/* {posts?.map(post => <PostCard key={post.id} post={post}></PostCard>)} */}
        <PostCard post={post}/>
      </div>
    </div>
  )
}

export default Home