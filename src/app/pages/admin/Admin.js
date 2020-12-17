import React, { Component } from 'react'
import ProfileImage from 'images/profile-image.JPG'

export class Admin extends Component {
  state = {password: ''}
  handleChange = e => {
    this.setState({password: e.target.value})
  }
  onSubmit = e => {
    e.preventDefault()

    console.log(this.state.password)
  }
  render() {
    return <div className="flex w-full h-screen items-center justify-center">
      <div className="w-90 h-90 border border-gray-200 rounded-md">
        <div className="p-10">
          <h1 className="py-1">Admin</h1>
          <p className="py-1">Enter the admin password to access the blog posts and manage  the website content.</p>
          <form onSubmit={this.onSubmit}>
            <input
              className="mt-2 w-full rounded p-2 border border-gray-200"
              onChange={this.handleChange}
              placeholder="Password"
              name="password"
              type="password" />
          </form>
          <div className="pt-3">
            <a href="/" className="hover:opacity-75 cursor-pointer text-sm ">Return Home {'>'}</a>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Admin
