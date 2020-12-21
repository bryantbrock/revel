import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadPost} from 'app/state/blog'
import {isEmpty, toHumanDate} from 'utils'

const enhance = connect(
  state => ({
    post: state.blog.post,
  }), {loadPost})

export class Post extends Component {
  componentDidMount() {
    const id = window.location.pathname.substring(6)

    this.props.loadPost(id)
  }
  renderGhost() {
    return <div class="animate-pulse flex flex-col">
      <div class="mb-3 h-6 w-full rounded bg-black"></div>
      <div class="mb-3 h-6 w-3/4 rounded bg-black"></div>
      <div class="mb-10 h-4 w-1/2 rounded bg-gray-100"></div>
      <div class="mb-4 h-6 w-full rounded bg-gray-200"></div>
      <div class="mb-4 h-6 w-full rounded bg-gray-200"></div>
      <div class="mb-10 h-6 w-1/2 rounded bg-gray-200"></div>
      <div class="mb-4 h-6 w-full rounded bg-gray-200"></div>
      <div class="mb-4 h-6 w-3/4 rounded bg-gray-200"></div>
    </div>
  }
  renderPost({author, title, body, created}) {
    return <div className="flex flex-col">
      <h1 className="mb-3">{title}</h1>
      <p className="mb-10 opacity-75 text-sm">
        Last updated on {toHumanDate(created)} by {author}.
      </p>
      <p>{body}</p>
    </div>
  }
  render() {
    const {post} = this.props

    return <div class="pl-10 pt-10 max-w-2xl w-full mx-auto">
      {isEmpty(post) ?
        this.renderGhost() :
        this.renderPost(post)}
    </div>
  }
}

export default enhance(Post)
