import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Home() {

  return (
    <div>
      <h2>Home...</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
          </li>
        </ul>
        <div>
          {/* Outlet放置路由匹配到的组件 */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}
