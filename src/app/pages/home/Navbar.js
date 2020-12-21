import React from 'react'
import {humanToSlug} from 'utils'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const navLinks = [
  'Home',
  // 'Blog',
  // 'About',
  // 'Contact',
]

const basePath = 'https://bryantbrock.com/'
const devBasePath = 'http://localhost:3000/'

const path = basePath
// const path = devBasePath

const Navbar = ({title, subtitle, icon = 'map-marker-alt'}) => {
  return <div className="flex mx-auto py-5 w-full justify-between">
    <div id="nav-name">
      {/* <a href="/"><h1>{title}</h1></a>
      <p><FontAwesomeIcon icon="map-marked-alt" />{subtitle}</p> */}
    </div>
    <div id="nav-links" className="flex items-center flex-grow max-w-xs">
      <ul className="flex justify-between text-sm w-full">
        {navLinks.map((name, idx) =>
          <li key={idx}><a href={path + humanToSlug(name)} className="nav-link">{name}</a></li>)}
      </ul>
    </div>
  </div>
}

export default Navbar