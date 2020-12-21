import React, { Component } from 'react'
import {toHumanDate} from 'utils'

const snippet = longStr => longStr.substring(0, 250)

export class PostListItem extends Component {
  render() {
    const {post, className} = this.props
    const classes = className + 'post border border-gray-200 rounded w-full mb-5 hover:bg-gray-100'

    return <a href={`/blog/${post.id}`} className={classes}>
      <div className="flex items-center">
        <img className="h-full" src={post.imageUrl}/>
        <div className="flex-1 space-y-1 p-3">
          <h2 className="h-6 font-bold">{post.title}</h2>
          <div className="text-sm opacity-50">
            {toHumanDate(post.created)} by <span>{post.author}</span>
          </div>
          <div>{snippet(post.body)}...</div>
        </div>
      </div>
    </a>
  }
}

export default PostListItem
