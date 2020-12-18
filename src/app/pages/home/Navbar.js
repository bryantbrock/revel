import React from 'react'
import {humanToSlug} from 'utils'

const navLinks = [
  'Home',
  'Blog',
  'What I Do',
  'About',
  'Contact',
]

const basePath = 'https://bryantbrock.com/'
const devBasePath = 'http://localhost:3000/'

const path = basePath
// const path = devBasePath

const Navbar = ({title, subtitle}) => {
  return <div className="flex mx-auto py-5 w-full justify-between">
    <div id="nav-name">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <div id="nav-links" className="flex items-center flex-grow max-w-sm">
      <ul className="flex justify-between text-sm w-full">
        {navLinks.map((name, idx) =>
          <li key={idx}><a href={path + humanToSlug(name)} className="nav-link">{name}</a></li>)}
      </ul>
    </div>
  </div>
}

export default Navbar