import React from 'react'
import {Container, Spinner, Feed} from 'components'
import {toHumanDate} from 'utils'
import Navbar from 'app/pages/home/Navbar'
import Sidebar from 'app/pages/home/Sidebar'
import {connect} from 'react-redux'
import {getPostsData} from 'app/state/blog'

const snippet = longStr => longStr.substring(0, 200)

const enhance = connect(
  state => ({
    posts: state.blog.posts
  }), {getPostsData}
)

class Blog extends React.Component {
  componentDidMount() {
    this.props.getPostsData()
  }
  render() {
    const {posts} = this.props

    return <div className="w-full">
      <Container>
        <Navbar
          title="Bryant Brock"
          subtitle="Moscow, Idaho" />
      </Container>
      <Container>
        <Sidebar />
        <Feed>
          <div className="w-full items-start mb-5">
            <h1>Posts</h1>
          </div>
          {posts.length > 0 ? posts.map(({author, title, body, created, imageUrl}, idx) =>
          <a key={idx} className="post border border-gray-200 rounded w-full mb-5">
            <div className="flex items-center">
              <img className="h-full" src={imageUrl}/>
              <div className="flex-1 space-y-1 p-3">
                <h2 className="h-6 font-bold">{title}</h2>
                <div className="text-sm opacity-50">
                  {toHumanDate(created)} by <span>{author}</span>
                </div>
                <div className="">{snippet(body)}</div>
              </div>
            </div>
          </a>) : <Spinner size="lg" />}
        </Feed>
      </Container>
    </div>
  }
}

export default enhance(Blog)