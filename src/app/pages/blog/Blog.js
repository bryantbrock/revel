import React from 'react'
import {Container, Spinner, Feed} from 'components'
import {Switch, Route} from 'react-router-dom'
import {toHumanDate} from 'utils'
import Sidebar from 'app/pages/home/Sidebar'
import {connect} from 'react-redux'
import {loadPosts} from 'app/state/blog'
import Navbar from 'app/pages/home/Navbar'
import Post from 'app/pages/blog/Post'

const snippet = longStr => longStr.substring(0, 250)

const enhance = connect(
  state => ({
    posts: state.blog.posts
  }), {loadPosts}
)

class Blog extends React.Component {
  componentDidMount() {
    this.props.loadPosts()
  }
  renderBlogList(posts) {
    return <Feed>
      <div className="w-full items-start mb-5">
        <h1>Posts</h1>
      </div>
      {posts.length > 0 ? posts.map(({
          id, author, title, body, created, imageUrl
        }, idx) =>
      <a
        href={`/blog/${id}`}
        key={idx}
        className="post border border-gray-200 rounded w-full mb-5">
        <div className="flex items-center">
          <img className="h-full" src={imageUrl}/>
          <div className="flex-1 space-y-1 p-3">
            <h2 className="h-6 font-bold">{title}</h2>
            <div className="text-sm opacity-50">
              {toHumanDate(created)} by <span>{author}</span>
            </div>
            <div>{snippet(body)}...</div>
          </div>
        </div>
      </a>) : <Spinner size="lg" />}
    </Feed>
  }
  render() {
    const {posts, match} = this.props

    return <div className="w-full">
      <Container>
        <Navbar
          title="Bryant Brock"
          subtitle="Moscow, Idaho" />
      </Container>
      <Container>
        {match.isExact && <Sidebar />}
        <Switch>
          <Route exact path="/blog">{this.renderBlogList(posts)}</Route>
          {posts.map(({id}) => <Route exact path={`/blog/${id}`}><Post /></Route>)}
        </Switch>
      </Container>
    </div>
  }
}

export default enhance(Blog)