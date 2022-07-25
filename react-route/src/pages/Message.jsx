import React from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'

export default function Message() {

    const navigate = useNavigate()

    const [message] = React.useState([
        {id:'001',title:'01-message',content:'锄禾日当午'},
        {id:'002',title:'02-message',content:'汗滴禾下土'},
        {id:'003',title:'03-message',content:'谁知盘中餐'},
        {id:'004',title:'04-message',content:'粒粒皆辛苦'},
    ])

    function goDetail(item) {
        navigate('detail',{
            replace:false,
            state:{
                id:item.id,
                title:item.title,
                content:item.content
            }
        })
    }

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
                                <button onClick={()=>goDetail(e)}>点击跳转</button>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet />
        </div>
    )
}
