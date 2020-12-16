import React from 'react'
import {Container, Feed} from 'components'
import Navbar from 'app/pages/home/Navbar'
import Sidebar from 'app/pages/home/Sidebar'
import ProfileImage from 'images/profile-image.JPG'

export default class Home extends React.Component {
  render() {
    return <div className="w-full">
      <Container>
        <Navbar
          title="Bryant Brock"
          subtitle="Moscow, Idaho" />
      </Container>
      <Container>
        <Sidebar />
        <Feed>
          <div className="flex justify-end pl-20">
            <img className="rounded w-11/12" src={ProfileImage} alt="landing"/>
          </div>
        </Feed>
      </Container>
    </div>
  }
}