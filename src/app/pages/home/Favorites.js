import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getFavoritesData} from 'app/state/favorites'

const enhance = connect(
  state => ({
    favorites: state.favorites,
  }),
  {
    getData: getFavoritesData,
  }
)

class Favorites extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const {active, favorites} = this.props

    return favorites[active].length > 0 ?
    favorites[active].map(({rank, title, author}) =>
      <div className="rounded p-2">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-gray-100 rounded-full">{rank}</div>
          <div className="flex flex-col">
            <h2 className="bg-gray-100 rounded-full">{title}</h2>
            <p className="bg-gray-100 rounded-full">{author}</p>
          </div>
        </div>
      </div>) :
    <div class="border border-gray-200 rounded-md p-2 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex items-center">
        <div class="rounded-full bg-gray-200 h-12 w-12"></div>
        <div class="flex-1 space-y-1 p-1">
          <div class="h-4 bg-gray-200 rounded"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  }
}

export default enhance(Favorites)
