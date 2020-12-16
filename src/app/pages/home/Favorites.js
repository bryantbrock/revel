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
      <div className="rounded p-2" key={idx}>
        <div className="flex items-center">
          <div>{rank}</div>
          <div className="flex flex-col">
            <strong>{title}</strong>
            {type.author && <p>{type.author}</p>}
          </div>
        </div>
      </div>) : <Spinner />
  }
}

export default enhance(Favorites)
