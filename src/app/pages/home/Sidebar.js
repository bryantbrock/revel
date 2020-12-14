import React from 'react'
import {Select} from 'components'
import {staticFavorites} from 'app/state/favorites'
import Favorites from 'app/pages/home/Favorites'

export default class Sidbar extends React.Component {
  state = {activeOption: 'books'}
  setSelected = value => {
    this.setState({activeOption: value})
  }
  render() {
    const {activeOption} = this.state

    return <div id="side-nav" className="flex-none w-72 my-8">
      <p className="p-5 bg-gray-100 rounded">
        I grew up in the humid back woods of Fairhope AL.
        Moved to Moscow ID for college and married my spunky, gorgeous wife, Mariah.
        Currently a Senior and planning to continue my career at ConsignCloud as a software
        developer + customer support representative  when I graduate.
      </p>
      <div id="favorites" className="py-8">
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