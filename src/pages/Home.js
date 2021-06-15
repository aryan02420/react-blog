import BlogCards from '@/components/BlogCards'
import getFetch from '@/hooks/getFetch'

const Home = () => {
  const { error, isPending, data: blogs } = getFetch('http://localhost:4000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogCards blogs={blogs.sort((a,b) => a.id - b.id).reverse()} /> }
    </div>
  );
}

export default Home;
