import BlogCards from '@/components/BlogCards'

const Home = () => {
  let blogs=[
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
    <BlogCards blogs={blogs.sort((a,b) => a.id - b.id).reverse()} />
  );
}

export default Home;
