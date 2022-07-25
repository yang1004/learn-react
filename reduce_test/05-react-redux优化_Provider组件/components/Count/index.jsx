import React, { Component } from 'react'

export default class Count extends Component {

  increment = ()=>{
    const { value } = this.selectNumber
    this.props.jia(value*1)
  }

  decrement = ()=>{
    const { value } = this.selectNumber
    this.props.jian(value*1)
  }

  incrementOnOdd = ()=>{
    const { value } = this.selectNumber
    if(this.props.count % 2 !== 0){
      this.props.jia(value*1)
    }
  }

  delayedIncrement = ()=>{
    const { value } = this.selectNumber
    this.props.jiaAsync(value*1,1000)
  }


  render() {
    return (
      <div>
        <h2>当前求和为{this.props.count}</h2>
        <select ref={ c => this.selectNumber=c }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementOnOdd}>基数再+</button>&nbsp;&nbsp;
        <button onClick={this.delayedIncrement}>延时+</button>
      </div>
    )
  }

}
