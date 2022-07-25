import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {

  const [sum,setSum] = React.useState(1)

  return (
    <div>
      <h2>Home...</h2>
      {
        sum === 2 ? <Navigate to="/about" replace={true}></Navigate> : <h3>当前sum值为{sum}</h3>
      }
      <button onClick={()=>setSum(2)}>点我改变sum值</button>
    </div>
  )
}
