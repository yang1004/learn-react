import React from 'react'
import { NavLink,useRoutes } from 'react-router-dom'
import routes from './routes/index'
import Header from './components/Header'

export default function App() {

    const element = useRoutes(routes)

    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        {/* end属性当匹配到子路由时父路由不会高亮 */}
                        <NavLink className="list-group-item" end to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                        {element}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
