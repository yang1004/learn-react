import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {

  const [sum,setSum] = React.useState(1)

  return (
    <div>
      <h2>Home...</h2>
    </div>
  )
}
