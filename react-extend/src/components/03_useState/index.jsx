import React, { Component } from 'react'

/*
//类组件写法
class Demo extends Component {

  state = {
    count:0
  }

  add = ()=>{
    let { count } = this.state
    this.setState({ count:count+1 })
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
*/

//函数组件写法
function Demo(){
  const [count,setCount] = React.useState(0)

  function add(){
    // setCount(count+1)//第一种写法
    //可传入一个函数，参数为当前值，return为更新的值
    setCount(count=>count+1)
  }

  return (
    <div>
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
    </div>
  )
}


export default Demo