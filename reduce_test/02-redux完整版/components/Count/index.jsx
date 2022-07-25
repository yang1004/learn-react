import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction,createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {

  componentDidMount(){
    store.subscribe(()=>{
      //调用this.setState({})自动调用render方法
      this.setState({})
    })
  }

  increment = ()=>{
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }

  decrement = ()=>{
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }

  incrementOnOdd = ()=>{
    const { value } = this.selectNumber
    const count = store.getState()
    if(count % 2 === 1){
      store.dispatch(createIncrementAction(value*1))
    }
  }

  delayedIncrement = ()=>{
    const { value } = this.selectNumber
    setTimeout(()=>{
      store.dispatch(createIncrementAction(value*1))
    },1000)
  }


  render() {
    return (
      <div>
        <h2>当前求和为{store.getState()}</h2>
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
