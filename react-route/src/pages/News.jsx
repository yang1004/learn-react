import React from 'react'
import { useNavigationType } from 'react-router-dom'

export default function News() {
    //进入该页面路由跳转的方式：PUSH、REPLACE、POP(刷新)
    console.log(useNavigationType())
    return (
        <div>
            <ul>
                <li>01-news</li>
                <li>02-news</li>
                <li>03-news</li>
            </ul>
        </div>
    )
}
