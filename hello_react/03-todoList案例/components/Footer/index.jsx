import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  render() {
    let { list } = this.props
    let count = 0
    list.forEach((item)=>{
      if(item.isSelect) count++
    })
    return (
      <div className="footer">
        <div className="left">
          <input type="checkbox" className="all" checked={count===list.length} onChange={this.selectAll}/>
          <span>当前已选{count}/总共{list.length}</span>
        </div>
        <div className="right">
          <button onClick={this.delSelect}>点击删除勾选</button>
        </div>
      </div>
    )
  }

  selectAll = (event)=>{
    let { list } = this.props
    list.forEach((item)=>{
      if(event.target.checked){
        item.isSelect = true
      }else{
        item.isSelect = false
      }
    })
    this.props.updateList(list)
  }

  delSelect = ()=>{
    this.props.delSelect()
  }

}
