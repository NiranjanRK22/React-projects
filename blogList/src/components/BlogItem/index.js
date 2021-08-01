// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <div className="blog-container">
      <div className="blog-details-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <div>
        <p className="blog-description">{description}</p>
      </div>
    </div>
  )
}

export default BlogItem