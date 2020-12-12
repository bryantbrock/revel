import React from 'react'

export default class Container extends React.Component {
  render() {
    const {children, className} = this.props

    return <div
      className={`flex mx-auto py-4 max-w-5xl w-11/12 ${className}`}>
      {children}
    </div>
  }
}