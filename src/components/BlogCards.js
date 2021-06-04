
import { Link } from 'react-router-dom';

const BlogCards = ({ blogs }) => {
  return (
    <div className="blog-list">
      <h1>All Blogs</h1>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <div className="blog-preview-image"></div>
          <article>
            <h3>{ blog.author } &middot; { blog.timestamp }</h3>
            <h2>{ blog.title }</h2>
            <h4>{ blog.topic }</h4>
            <p className="summary">{ blog.summary }</p>
          <Link to={`/blogs/${blog.id}`}>Read more
          </Link>
          </article>
        </div>
      ))}
    </div>
  );
}
 
export default BlogCards;