import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    let { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="left">
                  <input type="checkbox" className="checkbox" checked={item.isSelect} onChange={this.changeSelect(item.id)}/>
                  <span>{item.name}</span>
                </div>
                <div className="right">
                  <button onClick={this.delItem(item.id)}>删除</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  delItem = (id)=>{
    
    return ()=>{
      this.props.delItem(id)
    }
  }

  changeSelect = (id)=>{
    return ()=>{
      this.props.changeSelect(id)
    }
  }
}
