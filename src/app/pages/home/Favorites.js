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

const GhostFavorite = () =>
  <div className="border border-gray-200 rounded-md my-2 p-1 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex items-center">
      <div className="rounded-full bg-gray-200 h-8 w-8"></div>
      <div className="flex-1 space-y-1 p-1">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  </div>

class Favorites extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const {active, favorites} = this.props

    console.log(active)

    return favorites[active].length > 0 ?
    favorites[active].map(({rank, title, ...type}, idx) =>
      <div className="rounded p-2" key={idx}>
        <div className="flex items-center">
          <div>{rank}</div>
          <div className="flex flex-col">
            <strong>{title}</strong>
            {type.author && <p>{type.author}</p>}
          </div>
        </div>
      </div>) : <div>
      {/* <GhostFavorite />
      <GhostFavorite />
      <GhostFavorite /> */}
    </div>
  }
}

export default enhance(Favorites)
