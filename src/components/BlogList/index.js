// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <li className="list-item-container">
      <BlogItem blogList={blogList} />
    </li>
  )
}

export default BlogList
