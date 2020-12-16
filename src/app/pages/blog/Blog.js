import React from 'react'
import {Container, Spinner} from 'components'
import Navbar from 'app/pages/home/Navbar'
import Sidebar from 'app/pages/home/Sidebar'
import {connect} from 'react-redux'
import {getPostsData} from 'app/state/blog'

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
        <div className="flex-grow my-8 h-96">
          <div className="">
          {posts.length > 0 ? posts.map(({author, title, body, created, imageUrl}, idx) =>
            <div key={idx} className="border border-gray-200 rounded-md my-2 p-1 max-w-sm w-full mx-auto flex flex-col">
              <div className="flex items-center">
                <img className="h-12 w-12" src={imageUrl}/>
                <div className="flex-1 space-y-1 p-3">
                  <div className="h-5">{title}</div>
                  <div className="h-2">{created}</div>
                  <div className="h-5 w-3/4">{body}</div>
                  <div className="h-5 w-3/4">{author}</div>
                </div>
              </div>
            </div>) : <Spinner />}
          </div>
        </div>
      </Container>
    </div>
  }
}

export default enhance(Blog)