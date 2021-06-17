import BlogCards from '@/components/BlogCards'
import getFetch from '@/hooks/getFetch'
import { setBlog } from '@/actions/blogs.actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Home = () => {
  const { error, isPending, data } = getFetch('https://aryan02420-json-blog.herokuapp.com/blogs')
  const blogs = useSelector((state) => state.blogs)
  const dispatch = useDispatch()
  useEffect(() => {
    blogs.length === 0 && !error && !isPending && dispatch(setBlog(data))
  }, [data, isPending, blogs.length, dispatch, error])

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogCards blogs={blogs.sort((a, b) => a.id - b.id).reverse()} />}
    </div>
  )
}

export default Home
