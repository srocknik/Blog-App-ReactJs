// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: [], isRunning: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    console.log(data)

    const updatedData = {
      id: data.id,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }

    this.setState({blogItemDetails: updatedData, isRunning: false})
  }

  render() {
    const {blogItemDetails, isRunning} = this.state

    const {title, imageUrl, avatarUrl, content, author} = blogItemDetails

    return (
      <div className="blogItemDetails-container">
        {isRunning ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="details-heading">{title}</h1>
            <div className="details-item-container">
              <div className="details-avatar-container">
                <img
                  src={avatarUrl}
                  alt={author}
                  className="details-image-avatar"
                />
                <p className="details-author">{author}</p>
              </div>
              <img src={imageUrl} alt={title} className="details-image" />
              <p className="content">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
