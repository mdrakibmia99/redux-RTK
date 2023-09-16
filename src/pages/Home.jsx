import PostCard from "../components/PostCard"
import { useGetPostsQuery } from "../redux/features/api/baseApi"

function Home() {
  // useGetPostsQuery return a object
  const { isError, isLoading, data: posts, error } = useGetPostsQuery()
  return (
    <div className="container mx-auto">
      <h1>Home page</h1>
      <div className="flex flex-col gap-3">
        {posts?.map(post => <PostCard key={post.id} post={post}></PostCard>)}
      </div>
    </div>
  )
}

export default Home