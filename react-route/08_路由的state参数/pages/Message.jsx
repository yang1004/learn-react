import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Message() {

    const [message] = React.useState([
        {id:'001',title:'01-message',content:'锄禾日当午'},
        {id:'002',title:'02-message',content:'汗滴禾下土'},
        {id:'003',title:'03-message',content:'谁知盘中餐'},
        {id:'004',title:'04-message',content:'粒粒皆辛苦'},
    ])

    return (
        <div>
            <ul>
                {
                    message.map((e)=>{
                        return (
                            <li key={e.id}>
                                <Link 
                                    to="detail"
                                    state={{
                                        id:e.id,
                                        title:e.title,
                                        content:e.content
                                    }}
                                >
                                    {e.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet />
        </div>
    )
}
