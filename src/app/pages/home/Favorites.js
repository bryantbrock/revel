import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Spinner} from 'components'
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
    favorites[active].map(({rank, title, ...type}, idx) =>
      <div className="rounded py-2" key={idx}>
        <div className="flex rounded border border-gray-100 p-2 px-4">
          <div>{rank}.</div>
          <div className="flex flex-col pl-2">
            {title && <strong>{title}</strong>}
            {type.author && <p className="text-sm">{type.author}</p>}
          </div>
        </div>
      </div>) : <Spinner size="sm" />
  }
}

export default enhance(Favorites)
