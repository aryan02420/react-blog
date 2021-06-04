import BlogCards from '@/components/BlogCards'
import getFetch from '@/hooks/getFetch'

const Home = () => {
  const { error, isPending, data: blogs } = getFetch('http://localhost:8000/blogs')

  let blogsl=[
    {
      id: 1,
      title: 'first blog yay!',
      author: 'aryan',
      timestamp: '2 june',
      topic: 'general',
      summary: 'Proident officia incididunt excepteur deserunt excepteur dolor laborum quis. Deserunt magna labore culpa elit consectetur sint ut nostrud id quis et sunt.'
    },
    {
      id: 2,
      title: 'second blog yay!',
      author: 'aryan',
      timestamp: '4 june',
      topic: 'general',
      summary: 'Proident officia incididunt excepteur deserunt excepteur dolor laborum quis. Deserunt magna labore culpa elit consectetur sint ut nostrud id quis et sunt.'
    },
  ]
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogCards blogs={blogs.sort((a,b) => a.id - b.id).reverse()} /> }
    </div>
  );
}

export default Home;
