import React from 'react'
import {Select} from 'components'
import {staticFavorites} from 'app/state/favorites'
import Favorites from 'app/pages/home/Favorites'
import {toLowerCase} from 'utils'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class Sidbar extends React.Component {
  state = {activeOption: 'food'}
  setSelected = value => {
    this.setState({activeOption: toLowerCase(value)})
  }
  render() {
    const {activeOption} = this.state

    return <div id="side-nav" className="flex-none w-1/2 my-8">
      <div id="nav-name">
      <h1>Bryant Brock</h1>
        <div className="flex flex-col justif-start w-11/12 pt-5">
        I grew up in the humid back woods of Fairhope AL.
        Moved to Moscow ID for college and married my spunky, gorgeous wife, Mariah.
        Currently a Senior at New Saint Andrews College and planning to continue my career at ConsignCloud as a software
        developer + customer support representative  when I graduate.
          <h1 className="font-thin pb-5 pt-10">What I Do</h1>
          <div className="border border-gray-200 p-2">
            <p className="font-bold">Full Stack Web Developer - ConsignCloud</p>
            <p className="py-1">I began developing software during my junior year at college. I was working for
              Bulrushed Books at the time and going for my degree in the Liberal Arts. In the fall of 2019, I started working as an assitant
              developer at ConsignCloud with Jon Staab, and I also started working on the Customer Service side as well.
              The inventory management and POS system is built with React, Python, and PostgreSQL.</p>
            <p className="font-bold pt-5">Customer Support - ConsignCloud</p>
            <p className="py-1">I work as customer support for ConsignCloud, answering questions over
              intercome, giving demos to potential customers, and helping troubleshoot issues over
              TeamViewer screenshare.</p>
          </div>
        </div>
      </div>
      <div id="favorites" className="py-8">
        <h1 className="font-thin pb-5 pt-10">Random Facts</h1>
        <div className="flex flex-row items-center">
          <div className="flex py-3">
            <p className="pr-2">Top</p>
          </div>
          <Select setValue={this.setSelected} options={staticFavorites} />
        </div>
        <Favorites active={activeOption} />
      </div>
    </div>
  }
}