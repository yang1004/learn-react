import React, { Component } from 'react'

export default class Demo extends Component {

  state = {
    count:0
  }

  add = ()=>{
    let { count } = this.state
    // this.setState({ count:count+1 })//第一种写法
    this.setState( state => ({ count:state.count+1 }),()=>{
      //第二个参数为回调函数，当state值修改并render结束后调用
      console.log('@')
    })
  }

  render() {
    let { count } = this.state
    return (
      <div>
        <h2>当前求和为{count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }

}
