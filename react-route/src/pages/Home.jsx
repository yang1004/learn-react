import React from 'react'
import { NavLink,Outlet,useOutlet } from 'react-router-dom'

export default function Home() {

  const result = useOutlet()
  //获取路由下面的子路由组件，如果组件没挂载则返回null
  console.log('##',result)

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
