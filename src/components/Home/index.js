import {Component} from 'react'

import Loader from 'react-loader-spinner'

import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

import './index.css'

class Home extends Component {
  state = {blogsList: [], isRunning: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      id: each.id,
      author: each.author,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      title: each.title,
      topic: each.topic,
    }))

    this.setState({blogsList: updatedData, isRunning: false})
  }

  render() {
    const {blogsList, isRunning} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {isRunning ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-container">
            {blogsList.map(each => (
              <BlogList blogList={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
