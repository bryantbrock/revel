import React from 'react'

export default class Home extends React.Component {
  render() {
    return <div className="w-full">
      <div className="flex mt-12 mx-auto max-w-5xl w-11/12 justify-between">
        <div id="nav-name">
          <h1>Bryant Brock</h1>
          <p>Moscow, Idaho</p>
        </div>
        <div id="nav-links" className="flex-grow max-w-md">
          <ul className="flex justify-between">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/blog" className="nav-link">Blog</a></li>
            <li><a href="/what-i-do" className="nav-link">What I do</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="flex-none w-40">

        </div>
        <div className="flex-grow">

        </div>
      </div>
    </div>
  }
}