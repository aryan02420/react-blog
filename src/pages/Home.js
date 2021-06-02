import BlogCards from '@/components/BlogCards'

const Home = () => {
  let blogs=[
    {
      title: 'first blog yay!',
      author: 'aryan',
      timestamp: '2 june',
      topic: 'general',
      summary: 'Proident officia incididunt excepteur deserunt excepteur dolor laborum quis. Deserunt magna labore culpa elit consectetur sint ut nostrud id quis et sunt.'
    },
    {
      title: 'first blog yay!',
      author: 'aryan',
      timestamp: '2 june',
      topic: 'general',
      summary: 'Proident officia incididunt excepteur deserunt excepteur dolor laborum quis. Deserunt magna labore culpa elit consectetur sint ut nostrud id quis et sunt.'
    },
  ]
  return (
    <BlogCards blogs={blogs} />
  );
}

export default Home;
