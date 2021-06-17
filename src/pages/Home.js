import BlogCards from '@/components/BlogCards'
import getFetch from '@/hooks/getFetch'
import * as blogActions from '@/actions/blogs.actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Home = () => {
  const { error, isPending, data } = getFetch('http://localhost:4000/blogs')
  const blogs = useSelector((state) => state.blogs)
  const dispatch = useDispatch()
  useEffect(() => {
    !error && !isPending && dispatch(blogActions.setBlog(data))
  }, [data, isPending])
  console.log(blogs, data)

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogCards blogs={blogs.sort((a, b) => a.id - b.id).reverse()} />}
    </div>
  )
}

export default Home
