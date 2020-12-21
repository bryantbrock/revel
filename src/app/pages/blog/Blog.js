import React from 'react'
import {Container, Spinner, Feed} from 'components'
import {Switch, Route} from 'react-router-dom'
import Sidebar from 'app/pages/home/Sidebar'
import {connect} from 'react-redux'
import {loadPosts} from 'app/state/blog'
import Navbar from 'app/pages/home/Navbar'
import Post from 'app/pages/blog/Post'
import PostListItem from 'app/pages/blog/PostListItem'

const enhance = connect(
  state => ({
    posts: state.blog.posts
  }), {loadPosts}
)

class Blog extends React.Component {
  componentDidMount() {
    // this.props.loadPosts()
  }
  renderBlogList(posts) {
    return <Feed>
      <div className="w-full items-start mb-5">
        <h1>Posts</h1>
      </div>
      {posts.length > 0 ? posts.map((post, idx) =>
        <PostListItem key={idx} post={post} />) :
        <Spinner size="lg" />}
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