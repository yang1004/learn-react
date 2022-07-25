import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import { createDelItemAction,createChangeSelectAction } from '../../redux/count_action'

class Item extends Component {
  
  render() {
    let { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="left">
                  <input type="checkbox" className="checkbox" checked={item.isSelect} onChange={ () => this.props.changeSelect(item.id) }/>
                  <span>{item.name}</span>
                </div>
                <div className="right">
                  <button onClick={ () => this.props.delItem(item.id) }>删除</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default connect(
  state => ({list:state}),
  dispatch => ({
    delItem:id => {
      if(window.confirm('确定删除么？')){
        return dispatch(createDelItemAction(id))
      }
    },
    changeSelect:id => dispatch(createChangeSelectAction(id)),
  })
)(Item)
