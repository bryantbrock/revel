import React from 'react'
import {toHuman} from 'utils'

export default class Select extends React.Component {
  onChange = e => {
    this.props.setValue(e.target.value)
  }
  render() {
    const {options} = this.props

    return <select className="font-bold rounded cursor-pointer p-1" onChange={this.onChange}>
      {options.map(opt => <option key={opt}>{toHuman(opt)}</option>)}
    </select>
  }
}