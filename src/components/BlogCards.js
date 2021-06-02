
import { Link } from 'react-router-dom';

const BlogCards = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
          </Link>
          <p>{ blog.topic }</p>
          <h2>{ blog.title }</h2>
          <p>{ blog.author }</p>
          <p>{ blog.timestamp }</p>
          <p>{ blog.summary }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogCards;