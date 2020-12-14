import React from 'react'
import {humanToSlug} from 'utils'

export default ({links, title, subtitle}) => {
  return <div className="flex mx-auto py-5 w-full justify-between">
    <div id="nav-name">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <div id="nav-links" className="flex items-center flex-grow max-w-sm">
      <ul className="flex justify-between text-sm w-full">
        {links.map(name =>
          <li><a href={humanToSlug(name)} className="nav-link">{name}</a></li>)}
      </ul>
    </div>
  </div>
}