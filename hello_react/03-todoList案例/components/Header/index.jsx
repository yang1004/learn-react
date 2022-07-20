import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {

  constructor(props){
    super(props)
    this.addItem = this.props.addItem
  }

  render() {
    return (
      <div className="header">
        <input type="text" className="search" onKeyDown={this.keyDownEvent}/>
      </div>
    )
  }

  keyDownEvent = (e)=>{
    const { value } = e.target
    if(e.keyCode===13 && value!==''){
      this.addItem(value)
      e.target.value = ''
    }
  }

}
