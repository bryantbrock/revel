import React from 'react'

export default ({items}) => {
  return <select className="font-bold rounded cursor-pointer p-1">
    {items.map(({name}) => <option>{name}</option>)}
  </select>
}