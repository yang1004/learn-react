import React, { Component } from 'react'
import './index.css'
import Item from '../Item'

export default class List extends Component {
  render() {
    let { list } = this.props
    return (
      <div className="list">
        <Item/>
      </div>
    )
  }
}
