import {Home, Blog, Admin} from 'app/pages'

export const routes = [
  {path: '/', title: 'Bryant Brock - Home', component: Home},
  {path: '/home', title: 'Bryant Brock - Home', component: Home},
  {path: '/blog', title: 'Blog', component: Blog, notExact: true},
  {path: '/admin', title: 'Bryant Brock - Admin', component: Admin},
]