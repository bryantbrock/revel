import React from 'react'
import {Container, Feed, Spinner} from 'components'
import Navbar from 'app/pages/home/Navbar'
import Sidebar from 'app/pages/home/Sidebar'
import ProfileImage from 'images/profile-image.JPG'
import PostListItem from '../blog/PostListItem'

export default class Home extends React.Component {
  render() {
    const post = {
      id: '123',
      title: 'To Be or Not To Be',
      body: 'This is the body of the post',
      imageUrl: '',
      author: 'bryant',
      created: '2020-12-20T22:37:09.862Z',
    }

    return <div className="w-full">
      <Container>
        {/* <Navbar
          title="Bryant Brock"
          subtitle="Moscow, Idaho" /> */}
      </Container>
      <div id="feed" className="flex mx-auto py-4 max-w-5xl w-11/12">
        <Sidebar />
        <Feed>
          <div className="flex justify-end w-full">
            <img className="rounded pb-4" src={ProfileImage} alt="landing"/>
          </div>
          {/* <div className="flex flex-col justif-start w-11/12 pt-10">
            <h1 className="pb-5 font-thin">Blog</h1>
            {post.title ?
              <PostListItem post={post} /> :
              <Spinner size="lg" />}
          </div> */}
        </Feed>
      </div>
    </div>
  }
}