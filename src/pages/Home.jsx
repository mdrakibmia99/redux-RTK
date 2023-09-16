import { useGetPostsQuery } from "../redux/features/api/baseApi"

function Home() {
  // useGetPostsQuery return a object
  const {isError,isLoading,data,error}=useGetPostsQuery()
  return (
    <div>
     <h1>Home page</h1>
    </div>
  )
}

export default Home