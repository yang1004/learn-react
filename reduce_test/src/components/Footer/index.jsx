import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import { createSelectAllAction,createDelSelectAction } from '../../redux/count_action'

class Footer extends Component {

  render() {
    let { list } = this.props
    let count = 0
    list.forEach((item)=>{
      if(item.isSelect) count++
    })
    return (
      <div className="footer">
        <div className="left">
          <input type="checkbox" className="all" checked={count===list.length} onChange={ (event) => this.props.selectAll(event.target.checked) }/>
          <span>当前已选{count}/总共{list.length}</span>
        </div>
        <div className="right">
          <button onClick={this.props.delSelect}>点击删除勾选</button>
        </div>
      </div>
    )
  }

}

export default connect(
  state => ({list:state}),
  dispatch => ({
    selectAll:checked => dispatch(createSelectAllAction(checked)),
    delSelect:() => dispatch(createDelSelectAction())
  })
)(Footer)
