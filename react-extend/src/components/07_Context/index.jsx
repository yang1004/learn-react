import React, { Component } from 'react'
import './index.css'


//创建Context容器
const MyContext = React.createContext()
const { Provider,Consumer } = MyContext
export default class A extends Component {
  state = {
    username:'Tom',
    age:18
  }
  render() {
    const { username,age } = this.state
    return (
      <div className="parent">
        <h2>A组件</h2>
        <h3>用户名是：{username}</h3>
        <Provider value={{username,age}}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h2>B组件</h2>
        <C />
      </div>
    )
  }
}


/*
class C extends Component {

  //接收context参数
  static contextType = MyContext

  render() {
    console.log(this.context)
    const { username,age } = this.context
    return (
      <div className="grand">
        <h2>C组件</h2>
        <h3>用户名是：{username}，年龄为：{age}</h3>
      </div>
    )
  }
}
*/

//函数式组件
function C(){
  return (
    <div className="grand">
      <h2>C组件</h2>
      <h3>用户名是：
        <Consumer>
          {
            context=>{
              console.log(context)
              return `${context.username}，年龄为：${context.age}`
            }
          }
        </Consumer>
      </h3>
    </div>
  )
}
