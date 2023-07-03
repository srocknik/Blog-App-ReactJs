// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, imageUrl, author, avatarUrl, title, topic} = blogList

  return (
    <Link to={`/blogs/${id}`} className="link-container">
      <div className="blogitem-container">
        <img src={imageUrl} alt={title} className="item-image" />
        <div className="details-container">
          <p className="title">{topic}</p>
          <h1 className="topic">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={author} className="avatar-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
