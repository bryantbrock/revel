import React from 'react'

const humanToSlug = name =>
  name.split(' ')
    .map(name => name[0].toLowerCase() + name.slice(1))
    .join('-')

const navLinks = [
  'Home',
  'Blog',
  'What I Do',
  'About',
  'Contact',
]

export default () => {
  return <div className="flex mx-auto py-5 w-full justify-between">
    <div id="nav-name">
      <h1>Bryant Brock</h1>
      <p>Moscow, Idaho</p>
    </div>
    <div id="nav-links" className="flex items-center flex-grow max-w-sm">
      <ul className="flex justify-between text-sm w-full">
        {navLinks.map(name =>
          <li><a href={humanToSlug(name)} className="nav-link">{name}</a></li>)}
      </ul>
    </div>
  </div>
}