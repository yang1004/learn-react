import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {

  const {id,title,content} = useLocation().state

  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
