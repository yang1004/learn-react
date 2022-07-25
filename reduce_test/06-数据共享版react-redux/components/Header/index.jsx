import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import { createAddItemAction } from '../../redux/count_action'

class Header extends Component {

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
      this.props.addItem(value)
      e.target.value = ''
    }
  }

}


export default connect(
  state => ({list:state}),
  dispatch => ({
    addItem:data => dispatch(createAddItemAction(data))
  })
)(Header)
